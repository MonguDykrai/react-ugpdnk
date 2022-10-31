import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Tabs, Table, Tag, Space, DatePicker, Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
// import locale from 'antd/es/date-picker/locale/zh_CN';
import Download from './Download';
import DownloadHistory from './DownloadHistory';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <Button icon={<DownloadOutlined />} onClick={() => setOpen(true)}>
          数据导出
        </Button>
      </header>
      <Modal
        title="数据导出"
        open={open}
        footer={null}
        // closable={false}
        maskClosable
        onCancel={() => setOpen(false)}
        width={720}
        className="AppModal"
      >
        {/* <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="周报下载" key="1"> */}
        <Download />
        {/* </Tabs.TabPane>
          <Tabs.TabPane tab="下载历史" key="2">
            <DownloadHistory />
          </Tabs.TabPane>
        </Tabs> */}
      </Modal>
    </>
  );
};

export default App;
