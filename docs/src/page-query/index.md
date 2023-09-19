## 何时使用

适合表单场景。

## 示例

```tsx
import React from 'react';
import { PageQuery } from 'material-page-cxy';

// 表单配置
const formOptions = [
  {
    // Form.Item属性
    formItemOptions: "{\"label\":\"需求名称/编号\"}",
    // 控件属性
    widgetOptions: "{\"type\":\"input\",\"placeholder\":\"输入需求名称/编号进行搜索\"}"
  },
  {
    // Form.Item属性
    formItemOptions: "{\"label\":\"需求方\"}",
    // 控件属性
    widgetOptions: "{\"type\":\"input\",\"placeholder\":\"输入需求方进行搜索\"}"
  },
  {
    // Form.Item属性
    formItemOptions: "{\"label\":\"标签\"}",
    // 控件属性
    widgetOptions: "{\"type\":\"select\",\"placeholder\":\"选择标签\",\"dataset\":[{\"value\":\"small\",\"label\":\"标签A\"},{\"value\":\"medium\",\"label\":\"标签B\"}]}"
  },
  {
    // Form.Item属性
    formItemOptions: "{\"label\":\"需求名称/编号\"}",
    // 控件属性
    widgetOptions: "{\"type\":\"input\",\"placeholder\":\"输入需求名称/编号进行搜索\",\"dataset\":[{\"value\":\"small\",\"label\":\"标签A\"},{\"value\":\"medium\",\"label\":\"标签B\"}]}"
  },
  {
    // Form.Item属性
    formItemOptions: "{\"label\":\"需求方\"}",
    // 控件属性
    widgetOptions: "{\"type\":\"input\",\"placeholder\":\"输入需求方进行搜索\"}"
  },
  {
    // Form.Item属性
    formItemOptions: "{\"label\":\"标签\"}",
    // 控件属性
    widgetOptions: "{\"type\":\"select\",\"placeholder\":\"选择标签\",\"dataset\":[{\"value\":\"small\",\"label\":\"标签A\"},{\"value\":\"medium\",\"label\":\"标签B\"}]}"
  },
];

// 表单按钮配置
const formButtonOptions = [
  { event: 'search', type: 'primary', buttonText: '查询' },
  { event: 'reset', type: 'normal', buttonText: '重置' },
];

// 工具栏按钮配置
const toolButtonOptions = [
  { event: 'add', type: 'primary', buttonText: '新增' },
  { event: 'download', type: 'normal', buttonText: '下载' },
];

// 表格配置
const tableOptions = {
  options: "{}",
  columns: "[{\"title\":\"品牌营销服务设计\",\"dataIndex\":\"name\"},{\"title\":\"类型数量\",\"dataIndex\":\"type\"},{\"title\":\"需求方\",\"dataIndex\":\"demand\"},{\"title\":\"接口人\",\"dataIndex\":\"interface\"},{\"title\":\"供应商接口人\",\"dataIndex\":\"supplier\"},{\"title\":\"设计师\",\"dataIndex\":\"designer\"}]"
};

export default () => {
  return <div>
    <PageQuery
      formOptions={formOptions}
      formButtonOptions={formButtonOptions}
      toolButtonOptions={toolButtonOptions}
      tableOptions={tableOptions}
    />
  </div>
};
```

## API

<API hideTitle  src="@/components/page-query/page-query.tsx" />
