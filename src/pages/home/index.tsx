import Layout from "../../components/layout";

import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <div>
      <div>
        <Layout>
          <div>Home</div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
