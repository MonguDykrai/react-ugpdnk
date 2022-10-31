import React from 'react';
import { Tabs, Table, Tag, Space, DatePicker, Button } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';

const Download = () => (
  <>
    <>
      <Space direction="horizontal" size={12}>
        <DatePicker.RangePicker picker="week" locale={locale} />
        <Button>重置</Button>
        <Button type="primary">查询</Button>
      </Space>
      <br />
      <br />
    </>
    {/* <Space direction="horizontal" size={12}>
      <DatePicker.RangePicker locale={locale} />
      <Button>重置</Button>
      <Button type="primary">查询</Button>
    </Space>
    <br />
    <br /> */}
    <Table
      columns={[
        {
          title: '序号',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: '统计日期',
          dataIndex: 'range',
          key: 'range',
        },
        {
          title: '期数',
          dataIndex: 'periods',
          key: 'periods',
          render: (_, record) => {
            return `第（${_[0]}）${_[1]}期`;
          },
          sorter: (a, b) => a.periods.join('') - b.periods.join(''),
        },
        {
          title: '操作',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a href="/images/myw3schoolsimage.jpg" download>
                下载
              </a>
            </Space>
          ),
        },
      ]}
      dataSource={[
        {
          key: '1',
          range: '2022-10-03~2022-10-09',
          periods: [2022, 40],
          // periods: '第（2022）40期',
        },
        {
          key: '2',
          range: '2022-09-26~2022-10-03',
          periods: [2022, 39],
          // periods: '第（2022）39期',
        },
      ]}
    />
  </>
);

export default Download;
