export const config = {
  sampleBaseDir: '~/.paddlelabel/sample/bear', // should not have ending /, don't forget to \\ on windows
  // sampleBaseDir: '~/.paddlelabel/sample/fruit', // should not have ending /, don't forget to \\ on windows
  thirdPartyDir: '~/3rd_party', // should not have ending /
  catgInfo: {
    // all project types
    classification: { singleClass: 0, multiClass: 0 },
    detection: { coco: 0, voc: 0, yolo: 0 },
    semanticSegmentation: { mask: 0, coco: 0, eiseg: 0 },
    instanceSegmentation: { mask: 0, coco: 0, eiseg: 0 },
    opticalCharacterRecognition: { txt: 0 },
  },
};

export const runId = new Date().getTime().toString().slice(5, -3);
