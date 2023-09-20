
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PageLoginMeta: IPublicTypeComponentMetadata = {
  "componentName": "PageQuery",
  "title": "查询页",
  "group": "业务模板",
  "category": "通用",
  "docUrl": "",
  "screenshot": "https://chenxiaoyi27.oss-cn-guangzhou.aliyuncs.com/picture/screenshot_query.png",
  "devMode": "proCode",
  "npm": {
    "package": "material-page-cxy",
    "version": "0.1.3",
    "exportName": "PageQuery",
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
            "en-US": "tableData",
            "zh-CN": "表格数据"
          }
        },
        "name": "tableData",
        "setter": {
          "componentName": "JsonSetter",
          "initialValue": [{ "name": "品牌营销服务设计", "demand": "阮小五" }, { "name": "品牌营销服务设计2", "demand": "阮小六" }]
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formOptions",
            "zh-CN": "表单项"
          }
        },
        "name": "formOptions",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [{
                    "name": "formItemOptions",
                    "description": "表单项配置",
                    "setter": "JsonSetter"
                  },
                  {
                    "name": "widgetOptions",
                    "description": "控件配置",
                    "setter": "JsonSetter"
                  }]
                }
              },
              "initialValue": {
                "formItemOptions": { "label": "需求名称" },
                "widgetOptions": { "type": "input", "placeholder": "请输入需求名称" }
              }
            }
          },
          "initialValue": [
            {
              "formItemOptions": { "label": "需求名称" },
              "widgetOptions": { "type": "input", "placeholder": "请输入需求名称" }
            }
          ]
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formButtonOptions",
            "zh-CN": "表单按钮"
          }
        },
        "name": "formButtonOptions",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [{
                    "name": "event",
                    "description": "事件name配置",
                    "setter": "StringSetter"
                  },
                  {
                    "name": "type",
                    "description": "按钮样式类型",
                    "setter": {
                      "componentName": "SelectSetter",
                      "props": {
                        "mode": "single",
                        "options": ["primary", "secondary", "normal"].map(t => ({ title: t, value: t })),
                      },
                      "initialValue": "normal"
                    },
                  },
                  {
                    "name": "buttonText",
                    "description": "按钮文字",
                    "setter": "StringSetter"
                  }]
                }
              },
              "initialValue": {
                "event": "search",
                "type": "primary",
                "buttonText": "查询"
              }
            }
          },
          "initialValue": [
            {
              "event": "search",
              "type": "primary",
              "buttonText": "查询"
            }
          ]
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "toolButtonOptions",
            "zh-CN": "工具栏按钮"
          }
        },
        "name": "toolButtonOptions",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [{
                    "name": "event",
                    "description": "事件name配置",
                    "setter": "StringSetter"
                  },
                  {
                    "name": "type",
                    "description": "按钮样式类型",
                    "setter": {
                      "componentName": "SelectSetter",
                      "props": {
                        "mode": "single",
                        "options": ["primary", "secondary", "normal"].map(t => ({ title: t, value: t })),
                      },
                      "initialValue": "normal"
                    },
                  },
                  {
                    "name": "buttonText",
                    "description": "按钮文字",
                    "setter": "StringSetter"
                  }]
                }
              },
              "initialValue": {
                "event": "add",
                "type": "primary",
                "buttonText": "新增"
              }
            }
          },
          "initialValue": [
            {
              "event": "add",
              "type": "primary",
              "buttonText": "新增"
            }
          ]
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tableOptions",
            "zh-CN": "表格"
          }
        },
        "name": "tableOptions",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [{
                "name": "options",
                "description": "表格配置",
                "setter": "JsonSetter"
              },
              {
                "name": "columns",
                "description": "columns",
                "setter": {
                  "componentName": "JsonSetter"
                }
              }]
            }
          },
          "initialValue": {
            "options": {},
            "columns": [{"title":"品牌营销服务设计","dataIndex":"name"},{"title":"需求方","dataIndex":"demand"}]
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
    "title": "查询页",
    "screenshot": "https://chenxiaoyi27.oss-cn-guangzhou.aliyuncs.com/picture/screenshot_query.png",
    "schema": {
      "componentName": "PageQuery",
      "props": {}
    }
  }
];

export default {
  ...PageLoginMeta,
  snippets
};
