import React, { createElement, useEffect, useState } from 'react';
import { Table, Pagination, Divider, Grid, Button, Box, Form, Input, Select, Icon, Loading } from '@alifd/next';
import './index.scss';

const { Row, Col } = Grid;
const { Option } = Select;
const FormItem = Form.Item;

// 单个表单配置
export interface tFormOption {
  formItemOptions: any;//Object;
  widgetOptions: any;//Object;
};
// 单个按钮配置
export interface tButtonOption {
  event: string;// 用于点击事件配置
  type: 'primary' | 'secondary' | 'normal';// 按钮样式类型
  buttonText: string;//按钮文字
};
// 表格列配置
type tColumn = {
  title: string;
  dataIndex: string;
};
// 表格配置
export interface tTableOption {
  options: any;//Object;//Table props
  columns: Array<tColumn>;//Array<tColumn>;//表格列配置
};

export interface PageQueryProps {
  formOptions: Array<tFormOption>;
  formButtonOptions: Array<tButtonOption>,
  toolButtonOptions: Array<tButtonOption>,
  tableOptions: tTableOption;
  tableData: Array<any>;// 表格数据
}

// 控件渲染
const WidgetRender = (props: any): JSX.Element => {
  const { type, ...otherProps } = props;
  if (type === 'input') {
    return <Input {...otherProps} />
  } else if (type === 'select') {
    return <Select {...otherProps}>
      {(otherProps?.dataset || []).map(({ value, label }) => (
        <Option value={value} key={value}>{label}</Option>
      ))}
    </Select>
  } else {
    <span>暂不支持</span>
  }
}

const PageQuery: React.FC<PageQueryProps> = function (props: PageQueryProps) {

  const formOptions = (props?.formOptions || []).map(op => ({
    formItemOptions: op?.formItemOptions || {},
    widgetOptions: op?.widgetOptions || {},
  }));
  const formButtonOptions = props.formButtonOptions || [];
  const toolButtonOptions = props.toolButtonOptions || [];
  const tableOptions = {
    options: props.tableOptions?.options || {},
    columns: props.tableOptions?.columns || [],
  };
  const tableData = props.tableData || [];

  const [loading, setLoading] = useState(true);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const onOperation = () => {
    setLoading(true);
  };

  const onPaginationChange = () => {
    setLoading(true);
  };

  const toggleSeachList = () => {
    setExpand(!expand);
  };
  const formItemCommonOptions = {
    labelAlign: 'left'
  };
  // 表单按钮点击事件
  const handleFormClick = (eventKey: string) => {
    console.log('eventKey: ', eventKey);
    if (eventKey === 'search') {
      onOperation();
    }
  }
  // 工具栏按钮点击事件
  const handleToolClick = (eventKey: string) => {
    console.log('eventKey: ', eventKey);
  }
  // 将表单配置按每3项拆成二维数组
  let rows: Array<Array<tFormOption>> = [];
  formOptions.map((op, index) => {
    if (!rows.length) {
      rows[rows.length] = [];
    } else if (rows[rows.length - 1].length === 3) {
      rows.push([]);
    }
    rows[rows.length - 1].push(op);
  });

  return (
    <div className="ExampleComponent" style={{ padding: 20 }}>
      <Form inline labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} style={{ textAlign: 'center' }}>
        <Row>
          <Col>
            {(rows.length ? rows[0] : []).map((item: tFormOption) => {
              return <FormItem {...item.formItemOptions} {...formItemCommonOptions}>
                {WidgetRender(item.widgetOptions)}
              </FormItem>
            })}
          </Col>
        </Row>
        {expand && (
          <>
            {(rows.length > 1 ? rows.slice(1) : []).map(row => (
              <Row>
                <Col>
                  {row.map((item: tFormOption) => {
                    return <FormItem {...item.formItemOptions} {...formItemCommonOptions}>
                      {WidgetRender(item.widgetOptions)}
                    </FormItem>
                  })}
                </Col>
              </Row>
            ))}
          </>
        )}
      </Form>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        {(formButtonOptions || []).map(btn => <Button {...btn} onClick={() => handleFormClick(btn.event)}>{btn.buttonText}</Button>)}
        {rows.length > 1 && <Button onClick={toggleSeachList}>
          {expand ? (
            <>
              收起 <Icon type="arrow-up" size="xs" />
            </>
          ) : (
            <>
              展开 <Icon type="arrow-down" size="xs" />
            </>
          )}
        </Button>}
      </div>
      <Divider dashed />
      <div>
        <Loading visible={loading} style={{ display: 'block' }}>
          <div style={{ display: 'flex', justifyContent: 'start', gap: 10, paddingBottom: 15 }}>
            {(toolButtonOptions || []).map(btn => <Button {...btn} onClick={() => handleToolClick(btn.event)}>{btn.buttonText}</Button>)}
          </div>
          <Table
            hasBorder={false}
            dataSource={tableData}
            {...tableOptions?.options}
          >
            {(tableOptions?.columns || []).map(column => <Table.Column {...column} key={column.dataIndex} />)}
          </Table>
          <Box margin={[15, 0, 0, 0]} direction="row" align="center" justify="space-between">
            <div>
              共<span>{tableData.length}</span>条
            </div>
            <Pagination total={tableData.length} onChange={onPaginationChange} />
          </Box>
        </Loading>
      </div>
    </div >
  );
};

PageQuery.displayName = 'PageQuery';
export default PageQuery;
