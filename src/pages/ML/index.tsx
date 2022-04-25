import React, { useState, useEffect, useRef } from 'react';
import { Button, Select, Input, Form, message } from 'antd';
import PPContainer from '@/components/PPContainer';
import PPBlock from '@/components/PPBlock';
import serviceUtils from '@/services/serviceUtils';
import { ProjectUtils } from '@/services/utils';
import { ModelUtils, getVersion } from '@/services/utils';

const ML: React.FC = () => {
  const project = ProjectUtils(useState);
  const projectId = serviceUtils.getQueryVariable('projectId');
  const model = ModelUtils(useState);
  const projectSelect = useRef();
  const { Option } = Select;
  const [form] = Form.useForm();

  useEffect(() => {
    async function init() {
      // ensure backend up
      if (!(await getVersion())) return;

      project.getAll();

      // ensure projectid
      if (!projectId) {
        message.error(
          'Machine Learning settings are specific to every project. Please choose a project first.',
        );
        return;
      }
      project.getCurr(projectId);
    }
    init();
  }, []);

  function saveMlsettings(settings) {
    const allModelSettings = project.curr.otherSettings?.models
      ? project.curr.otherSettings?.models
      : {};
    allModelSettings[settings.modelName] = { trainBatchSize: settings.trainBatchSize };

    project.curr.otherSettings.perviousModel = settings.modelName;
    project.curr.otherSettings.models = allModelSettings;
    project.update(project.curr.projectId, { otherSettings: project.curr.otherSettings });
  }

  useEffect(() => {
    if (!project.curr) return;
    const settings = project.curr.otherSettings;
    const mod = settings.models ? settings.models[settings.perviousModel] : {};
    const initialValues = {
      mlBackendUrl: settings.mlBackendUrl,
      modelName: settings.perviousModel,
      trainBatchSize: mod.trainBatchSize,
    };
    form.setFieldsValue(initialValues);
    if (settings?.mlBackendUrl) model.setMlBackendUrl(settings.mlBackendUrl);
  }, [project.curr]);

  function setMlBackendUrl() {
    if (!project.curr) {
      message.error('Please choose a project first!');
      return;
    }
    const mlBackendUrl = form.getFieldValue('mlBackendUrl');
    model.setMlBackendUrl(mlBackendUrl);
    const otherSettings = { ...project.curr.otherSettings, mlBackendUrl: mlBackendUrl };
    project.update(project.curr.projectId, { otherSettings: otherSettings });
  }

  return (
    <PPContainer>
      <PPBlock>
        {'Project:'}
        <Select
          placeholder="Select a project"
          onChange={(pjid) => project.getCurr(pjid)}
          value={project.curr?.projectId}
          ref={projectSelect}
        >
          {project.all?.map((proj) => (
            <Option value={proj.projectId}>{proj.name}</Option>
          ))}
        </Select>
      </PPBlock>

      <PPBlock>
        <Button type={'primary'}>{'Train'}</Button>
        <Button type={'primary'}>{'Progress'}</Button>
        <Button type={'primary'}>{'Run Inference'}</Button>
      </PPBlock>

      <PPBlock>
        <Form
          form={form}
          layout="horizontal"
          size="large"
          style={{ marginTop: '5.69rem' }}
          onFinish={(values) => {
            console.log(values);
            saveMlsettings(values);
          }}
          hidden={project.curr == undefined}
        >
          <Input.Group compact>
            <Form.Item
              name="mlBackendUrl"
              rules={[
                {
                  required: true,
                  message: 'Please input ml backend url',
                },
              ]}
              style={{ fontSize: '1.5rem' }}
            >
              <Input
                allowClear={true}
                addonBefore={'ML Backend URL '}
                style={{ textAlign: 'left' }}
              />
            </Form.Item>
            <Button type="primary" onClick={setMlBackendUrl}>
              Set
            </Button>
          </Input.Group>

          <Form.Item
            name={'modelName'}
            label={'Model'}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            rules={[
              {
                required: true,
                message: 'Please select a model',
              },
            ]}
            style={{ fontSize: '1.5rem' }}
          >
            <Select placeholder="Select a model">
              {model.all?.map((m) => (
                <Option value={m.name}>{m.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name={'trainBatchSize'}
            label={'Training Batch Size'}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{ fontSize: '1.5rem' }}
          >
            <Input placeholder="Training batch size" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 16,
              offset: 6,
            }}
          >
            <Button
              htmlType="submit"
              type="primary"
              style={{ height: '2.5rem', width: '48%' }}
              block
            >
              {'Save'}
            </Button>
          </Form.Item>
        </Form>
      </PPBlock>
    </PPContainer>
  );
};
export default ML;
