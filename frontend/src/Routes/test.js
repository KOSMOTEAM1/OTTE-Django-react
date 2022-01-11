import Insertcnt from "../Components/Graph/insertcnt";
import LineCharts from "../Components/Graph/LineChart";
//import { useMemo, useEffect, useState } from "react";
//import axios from "axios";
//import faker from "faker/locale/ko";

//faker.seed(100);
function insertcnt() {
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>더미데이터를 입력시켜주세요</h4>
                    <LineCharts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default insertcnt;