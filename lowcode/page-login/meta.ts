
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PageLoginMeta: IPublicTypeComponentMetadata = {
  "componentName": "PageLogin",
  "title": "登录页",
  "group": "业务模板",
  "category": "通用",
  "docUrl": "",
  "screenshot": "https://chenxiaoyi27.oss-cn-guangzhou.aliyuncs.com/picture/screenshot_login.png",
  "devMode": "proCode",
  "npm": {
    "package": "material-page-cxy",
    "version": "0.1.0",
    "exportName": "PageLogin",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "表单名称"
          }
        },
        "name": "title",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": "账号登录"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "backImage",
            "zh-CN": "左侧图片链接"
          }
        },
        "name": "backImage",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": "https://chenxiaoyi27.oss-cn-guangzhou.aliyuncs.com/picture/login.png"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "backImageWidth",
            "zh-CN": "左侧图片宽度"
          }
        },
        "name": "backImageWidth",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": "600"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "form",
            "zh-CN": "表单"
          }
        },
        "name": "form",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": true,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "PageLogin",
    "screenshot": "https://chenxiaoyi27.oss-cn-guangzhou.aliyuncs.com/picture/screenshot_login.png",
    "schema": {
      "componentName": "PageLogin",
      "props": {}
    }
  }
];

export default {
  ...PageLoginMeta,
  snippets
};
