import React from "react";
import "./Preferences.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PreferedPackage from "./PreferedPackage";

function Preferences() {
  return (
    <>
      <section id="preference">
        <div className="wrapper">
          <div className="head">
            <h3>customize your preference</h3>
          </div>
          <div className="content-container">
            <Tabs>
              <TabList>
                <Tab>trekking</Tab>
                <Tab>beach</Tab>
                <Tab>trekking</Tab>
                <Tab>beach</Tab>
                <Tab>trekking</Tab>
              </TabList>
              <TabPanel className={"cards"}>
                <PreferedPackage />
                <PreferedPackage />
                <PreferedPackage />
                <PreferedPackage />
              </TabPanel>
              <TabPanel className={"cards"}>
                <PreferedPackage />
                <PreferedPackage />
                <PreferedPackage />
              </TabPanel>
            </Tabs>
          </div>
          <div className="button">
            <h5>explore</h5>
            <small>
              <img
                src={require("../../../assets/images/arrow-right-solid.png")}
                alt="Arrow"
              />
            </small>
          </div>
        </div>
      </section>
    </>
  );
}

export default Preferences;
