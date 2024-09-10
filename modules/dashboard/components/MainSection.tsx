import React, { Fragment } from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Section6 from './Section6/Section6'
import Section7 from './Section7/Section7'

interface Props {
    columns: any;
    aboutData: any;
    medicalData: any;
    findProduct: any;
    addProduct: any;
    formSubmit: any;
    showSuccess: any;
    dropdown: any;
    handleShow: any
}

const MainSection: React.FC<Props> = (props) => {
    const {columns, aboutData, medicalData, findProduct, addProduct, formSubmit, showSuccess, dropdown, handleShow} = props;
  return (
    <Fragment>
        <Section1 />
      <Section2 cardData={columns} />
      <Section3 aboutData={aboutData} />
      <Section4
        featuredProduct={medicalData}
        findProduct={findProduct}
        handleProduct={addProduct}
      />
      <Section5
        formSubmit={formSubmit}
        showSuccess={showSuccess}
        dropdown={dropdown}
        handleShow={handleShow}
      />
      <Section6/>
      <Section7/>
    </Fragment>
  )
}

export default MainSection