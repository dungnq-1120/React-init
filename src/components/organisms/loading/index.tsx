import React from "react";

import * as Style from "./styles";

const isProcessLoading = false;
const ProcessLoading: React.FC = () => {
  if (isProcessLoading === undefined) return null;
  return <Style.ProcessLoading isDone={!isProcessLoading} />;
};

export default ProcessLoading;
