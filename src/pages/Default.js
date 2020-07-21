import React from 'react';
import { Redirect } from 'react-router-dom';

import SwitchStart from '../components/SwitchStart';
import { useAppContext } from '../contexts/AppContext';

export default function Default() {
  const { state } = useAppContext();

  if (state.user) return <Redirect to="/buys" />;

  return <SwitchStart />;
}
