import React from 'react'
import Tariffi from '../Tariffi/Tariffi';

export default function TariffsItem() {
    
    const tariffs = [
        {id:1, title: "Везде онлайн ", hit:true, price: 500, priceValue:'₽', forMuch:"/месяц",internetTraffic:40,volium:"GB",text:"+безлимитные",tariffLink:"https://msk.tele2.ru/tariff/everywhere-online",minutes:500,time:"минут",limit: "безлимитный на Tele2 России",massage:50,sms:"SMS", socialIcon: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005','https://msk.tele2.ru/api/media/asset?mediaId=m220001','https://msk.tele2.ru/api/media/asset?mediaId=m220003','https://msk.tele2.ru/api/media/asset?mediaId=m220006','https://msk.tele2.ru/api/media/asset?mediaId=m220004',
        'https://msk.tele2.ru/api/media/asset?mediaId=m1990041','https://msk.tele2.ru/api/media/asset?mediaId=m1680033'], socialUnlim: true},
        {id:2, title: "Мой онлайн ", hit:false, price: 400, priceValue:'₽', forMuch:"/месяц", internetTraffic:15, volium:"GB",text:"+безлимитные",tariffLink:"" ,minutes:500,time:"минут",limit: "безлимитный на Tele2 России" ,message: false, sms:false,icon:"https://www.insofta.com/tml12/symbol-duo-icons/preview/options.png", socialIcon: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005','https://msk.tele2.ru/api/media/asset?mediaId=m220001','https://msk.tele2.ru/api/media/asset?mediaId=m220003','https://msk.tele2.ru/api/media/asset?mediaId=m220006','https://msk.tele2.ru/api/media/asset?mediaId=m220004',
        'https://msk.tele2.ru/api/media/asset?mediaId=m1990041','https://msk.tele2.ru/api/media/asset?mediaId=m1680033'], socialUnlim: true},
        {id:3, title: "Мой онлайн +", hit:false, price: 700,forMuch:"/месяц", internetTraffic:30, volium:"GB",text:"+безлимитные",tariffLink:"",minutes:800,time:"минут" ,limit: "безлимитный на Tele2 России",message: false, sms:false,icon:"https://www.insofta.com/tml12/symbol-duo-icons/preview/options.png", socialIcon: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005','https://msk.tele2.ru/api/media/asset?mediaId=m220001','https://msk.tele2.ru/api/media/asset?mediaId=m220003','https://msk.tele2.ru/api/media/asset?mediaId=m220006','https://msk.tele2.ru/api/media/asset?mediaId=m220004',
        'https://msk.tele2.ru/api/media/asset?mediaId=m1990041','https://msk.tele2.ru/api/media/asset?mediaId=m1680033'], socialUnlim: true},
        {id:4, title: "Мой разговор", hit:false, price: 200, priceValue:'₽', forMuch:"/месяц",internetTraffic:2,volium:"GB",text:false,tariffLink:"",minutes:200,time:"минут" ,limit: "безлимитный на Tele2 России",message: false, sms:false,icon:"https://www.insofta.com/tml12/symbol-duo-icons/preview/options.png"},
        {id:5, title: "Безлимит ", hit:false,  price: 650,priceValue:'₽', forMuch:"/месяц",volium:"Безлимитный интернет", tariffLink:"", limit: "безлимитный на Tele2 России",minutes:500,time:"минут",massage:50, sms:"SMS"},
        {id:6, title: "Премиум ", hit:false,  price: 1500,priceValue:'₽', forMuch:"/месяц", internetTraffic:50,volium:"GB",tariffLink:"", limit: "безлимитный на Tele2 России",minutes:2000,time:"минут",massage:500, sms:"SMS"},
        {id:7, title: "Интеренет для Всего", hit:false, price: 100, priceValue:'₽', forMuch:"/месяц", internetTraffic:300,volium:"GB", tariffLink:"", limit: false, minutes:30,time:"минут",massage:100, sms:"SMS"},
    ];  
    const tariff = tariffs.map(p=>({
      ...p,

    }))
    
    return (
        <div>
           <center> <div className="tarrifs-name"><h1>Тарифы</h1></div></center>
            {tariff.map(o => <Tariffi tariff = {o}/>)}
        </div>
    )
}
