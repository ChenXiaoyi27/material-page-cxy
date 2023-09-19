import * as React from 'react';
import { createElement } from 'react';
import { ResponsiveGrid } from '@alifd/next';
import './index.scss';

const { Cell } = ResponsiveGrid;

export interface PageLoginProps {
  title: string;
  backImage: string;
  backImageWidth: string;
  form: React.ReactNode;
}

const PageLogin: React.FC<PageLoginProps> = function PageLogin({
  title, backImage, backImageWidth, form
}) {
  return (
    <div className="ExampleComponent">
      <ResponsiveGrid style={{ height: '100vh' }} device="desktop">
        <Cell colSpan={7}>
          <div style={{ width: '95%', height: '100%', float: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={backImage} width={`${backImageWidth || '500'}px`} />
          </div>
          <div style={{ width: 1, height: '60%', float: 'right', marginTop: '20%', border: '1px solid #efefef' }} />
        </Cell>
        <Cell colSpan={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'auto', width: 400, border: '1px solid #efefef', borderRadius: 12, padding: '48px 0' }}>
            <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 48 }}>{title || '账号登录'}</h1>
            {form}
          </div>
        </Cell>
      </ResponsiveGrid>
    </div>
  );
};

PageLogin.displayName = 'PageLogin';
export default PageLogin;


