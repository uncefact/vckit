import React from 'react';
import Layout from '@theme/Layout';

const ApiDocs = () => {
  return (
    <Layout title="VC Kit API Docs" description="vc-kit api documentation">
      <iframe
        src="http://localhost:55883/badges"
        frameborder="0"
        style={{position: 'absolute', height: '100%', width: '100%'}}></iframe>
    </Layout>
  );
};

export default ApiDocs;
