import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default function BaseLayout({ children }, ...props) {
  return (
    <>
      <Navbar {...props} />
      {children}
    </>
  )
}

export const withBaseLayout = (Component, config) => (props) => {
  return (
    <>
      <Navbar {...config} view={Component.name} />
      <Component {...props} />
    </>
  )
}