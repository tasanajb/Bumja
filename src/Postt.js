import React,{ Component } from 'react';
import './Postt.css';
//import Header from './Header';
import Footer from './footer';
import Adheader from './appheader';

class Postt extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
 
      <div class="boxbm">
       
      <Adheader/>
 
 <font size="6" ><b><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โพสที่ถูกลบ </b></font>

          <div class="polaroid2bb">
            <img src={require('./Ddd1.png')} class="img3-responsive" style={{width: 300, height: 219}} />
            <div class="containeru5">
              <p class="infor"><b>น้องหมาขนสวย ใจดี</b></p>
              <p class="infor"><b>รายงาน : รูปไม่ตรงปก</b></p>
            </div>
          </div>

          <div class="polaroid3bb">
            <img src={require('./Ddd2.png')} class="img3-responsive" style={{width: 300, height: 219}} />
            <div class="containeru5">
              <p class="infor"><b>น้องแมวน่ารักลายเสือ</b></p>
              <p class="infor"><b>รายงาน : เป็นแมวที่ถูกขโมยมา เป็นโรค</b></p>
            </div>
          </div>

          <div class="polaroid4bb">
            <img src={require('./Ddd3.png')} class="img3-responsive" style={{width: 300, height: 219}} />
            <div class="containeru5">
              <p class="infor"><b>น้องแมวน่ารัก สีขาว</b></p>
              <p class="infor"><b>รายงาน : มีการโพสโดยมีการทารุณสัตว์</b></p>
            </div>
          </div>

          <ul>
            <li><a href="#home"><font size="4" ><b>จำนวนคนที่ออนไลน์ (9) </b></font></a></li>
            <li><a href="#news"><font size="4"><b>โพสที่ถูกลบ</b></font></a></li>
            <li><a href="#contact"><font size="4"><b>User ที่โดนแบน</b></font></a></li>
  
         </ul>
      
          <Footer/>
        
      </div>
     </div>
    </div>
  );
  }
}

export default Postt;