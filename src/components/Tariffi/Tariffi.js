import React from 'react'

export default function Tariffi({tariff}) {
 
 let hitti = '';

 tariff.hit ? hitti = 'hitti' : hitti = 'nothit';
    return (
        <div>
       
         <div className="container">
<div className="hidden-xs">
    <table className="table">
        <tbody>
<tr>
   <td className={hitti}><span className="title" >{tariff.title}</span>
    <div className="price">
        <div>
             <span>{tariff.price}</span>
            <div className="price-value">
                 <span className="value">{tariff.priceValue}</span>
                  <span className="per-value">  
                     <span>{tariff.forMuch}</span>
                 </span>
        </div>
    </div>
</div>
         </td>
         <td className="price-td">

<div>
    <div className="tariff-info-item">
        <span className="sku-value">
            <span>{tariff.internetTraffic}</span>
            <span>{tariff.volium}</span>
        </span>
    </div>
        <div className="preamble-grouped-services">
            <div className="preamble-text graphical">{tariff.text}</div>
            <div className="service-icon">
                {tariff.socialUnlim && tariff.socialIcon.map(o => <img src={o} alt=""/>)}
            </div>
        </div>
</div>
        </td>
        <td className="price-td">

<div>
    <div className="tariff-info-item">
        <span className="sku-value">
            <span>{tariff.minutes !== 0 && tariff.minutes}</span>
            <span>{tariff.time !== 0 && tariff.time }</span>
        </span>
    </div>
       <div className="tariff-info-item">
    <div className="group-title">{tariff.limit !== 0 && tariff.limit}</div>
       </div>    
</div>
        </td>
      
        <td className="price-td">

<div>
    <div className="tariff-info-item">
        <span className="sku-value">
            <span>{tariff.massage !== 0 && tariff.massage}</span>
            <span>{tariff.sms}</span>
        </span>
    </div>
       
</div>
        </td> 
        <td class="buttons-td">
            <div class="btns-rows">
                <div class="sim-btn-wrapper">
                    <a href={tariff.tariffLink} class="btn btn-small">
                        <span>Купить SIM</span>
                    </a>
                </div>
            </div>
        </td>  
</tr></tbody>
</table>


</div>
</div>

        </div>  
    )
}