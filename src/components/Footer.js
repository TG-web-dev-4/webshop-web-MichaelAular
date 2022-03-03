import { FaIdeal } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';

export default function Footer() {
  return <div className="footerContainer">
      <img className="footer_icon" src={require(`../images/icons/sanicon.png`)} />
      All rights reserved 2022
      <div className='payments'>
        <FaIdeal/>
        <FaCcPaypal/>
        <FaCcVisa/>
        <FaCcMastercard/>
      </div>

      </div>;
}
