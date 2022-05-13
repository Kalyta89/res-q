import BasicLayout from "@/layouts/BasicLayout";

import IframeResizer from 'iframe-resizer-react';


const LiveMatricsPage = () => {
  return (<BasicLayout>
            <IframeResizer
            src="https://qualityregistry.eu/mb-aux/public/dashboard/81ed5a47-8a9b-4eda-bd04-da0baacc99a1"
            style={{ width: '1px', minWidth: '100%'}}/>
        </BasicLayout>)
};


export default LiveMatricsPage;
