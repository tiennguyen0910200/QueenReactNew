import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../service/Servicebig.css';
import '../service/Servicesmall.css';
import { 
    Link } 
  from "react-router-dom";
class Service extends Component{
  constructor(){
    super();
    this.state = {
      categories1: [],
      categories2: [],
      categories3: [],
      categories4: [],
      categories5: []
    }     
    this.getCategory1();
    this.getCategory2();
    this.getCategory3();
    this.getCategory4(); 
    this.getCategory5();
    }
    getCategory1(){
      fetch("http://127.0.0.1:8000/api/product1")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      categories1: data 
                  })
              });
        });
  }
  getCategory2() {
    fetch("http://127.0.0.1:8000/api/product2")
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            categories2: data
          })
        });
      });
  }
      getCategory3(){
      fetch("http://127.0.0.1:8000/api/product3")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      categories3: data 
                  })
              });
        });
                    }
      getCategory4(){
      fetch("http://127.0.0.1:8000/api/product4")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      categories4: data 
                  })
              });
        });
      } 
      getCategory5(){
        fetch("http://127.0.0.1:8000/api/product5")
        .then(response => {
                response.json().then((data) =>{
                    console.log(data);
                    this.setState({
                        categories5: data 
                    })
                });
          });
        }                
  render(){
    return(
      <React.Fragment>
      <Header/>
      <div>
        <h2 className="title-service">Queen Party - Cung c???p h??? th???ng d???ch v??? cao c???p</h2>
        <div className="intro">
          
              <div className="col-lg-3">
                  <div className="container_cart_content" style={{width: "360px", height:"300px"}}>
                      <a><img className="imageShow" src="../img/food_content/comchien.jpg" alt=""/></a><br/>
                      <i>????n h??ng c???a b???n s??? ???????c b???o qu???n nh?? th??? n??o?
                      Queen Party s??? b???o qu???n ????n c???a b???n b???ng t??i & th??ng ????? ch???ng n???ng m??a, 
                      gi??? nhi???t... tr??n ???????ng ??i m???t c??ch t???t nh???t</i>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className="container_cart_content" style={{width: "360px", height:"300px"}}>
                    <a><img src="../img/Speaker/loa2.jpg" alt="" className="imageShow"/></a><br/>
                    <i>Loa vi t??nh, loa c?? d??y ??a d???ng m???u m?? ?????n t??? c??c th????ng hi???u n???i ti???ng,
                          ??m thanh ch???t l?????ng cao. Giao h??ng t???n n??i</i>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className="container_cart_content" style={{width: "360px", height:"300px"}}>
                    <a><img src="../img/Table/ban1.jpeg" alt="" className="imageShow"/></a><br/>
                    <i>????? trang tr?? n???i th???t trong nh??, shop b??n ????? trang tr?? decor 
                    ph??ng kh??ch, ph??ng ng???, gi?? r??? nh???t th??? tr?????ng, s???n ph???m ??a d???ng ?????c ????o</i>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className="container_cart_content" style={{width: "360px", height:"300px"}}>
                    <a><img src="../img/Cake/cake4.jpg" alt="" className="imageShow"/></a><br/>
                    <i>T???ng h???p lo???i b??nh l??m b???ng b???t m?? hay b???t g???o c?? h????ng v??? ng???t, m???n, b??o...c?? th??? h???p, n?????ng, chi??n</i>
                  </div>
              </div>
       
        </div><br></br>
        {/* Line1 */}
        <div className="title-line">
          <h2>D???ch v??? ????? ??n</h2>
        </div>
        <div >
          <div className="doan">
            {this.state.categories2.map((cates,index)=>
              <div >
                <div>
                  <Link to ={cates.id}><img className="imageShow" src={'http://127.0.0.1:8000/storage/' + cates.picture} controls></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{cates.name_product}</h4>
                </div>
              </div>
            )}   
          </div>
        </div>
        {/* Line2 */}
        <div className="title-line">
          <h2>D???ch v??? loa m??y</h2>
        </div>
        <div >
          <div className="doan">
            {this.state.categories1.map((cate1,index)=>
              <div >
                <div>
                  <Link to ={cate1.id}><img className="imageShow" src={'http://127.0.0.1:8000/storage/' +cate1.picture} controls></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{cate1.name_product}</h4>
                </div>
              </div>
            )}   
          </div>
            </div>
          {/* Line3 */}
          <div className="title-line">
          <h2>D???ch v??? trang tr??</h2>
        </div>
        <div >
          <div className="doan">
            {this.state.categories3.map((cate3,index)=>
              <div >
                <div>
                  <Link to ={cate3.id}><img className="imageShow" src={'http://127.0.0.1:8000/storage/' + cate3.picture} controls></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{cate3.name_product}</h4>
                </div>
              </div>
            )}   
          </div>
          </div>
          {/* line4 */}
          <div className="title-line">
          <h2>D???ch v??? b??nh kem</h2>
        </div>
        <div >
          <div className="doan">
            {this.state.categories5.map((cate5,index)=>
              <div >
                <div>
                  <Link to ={cate5.id}><img className="imageShow" src={'http://127.0.0.1:8000/storage/' + cate5.picture} controls></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{cate5.name_product}</h4>
                </div>
              </div>
            )}   
            </div>
            </div>
            <br/> 
            <br/>
            <br/>
      </div>
      <Footer/> 
      </React.Fragment>
    );
  }
}
export default Service;