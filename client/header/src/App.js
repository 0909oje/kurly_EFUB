import './App.css';
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

// load image
import logo from "./assets/kurly.png";
import place from "./assets/place.png";
import shopping from "./assets/shopping.png";
import center from "./assets/center.png";
import delivery from "./assets/샛별배송.png";
import cartegory from "./assets/cartegory.png";
import search from "./assets/검색창.png";
import advertising from "./assets/advertising.png";
import banner from "./asset/sale_banner.svg"

// load component
import Product from './component/product';
import TagCategory from "./component/TagCategory";

const Purple_header = styled.div` // 제일 위 팝업
margin-top:0px;
align-content:flex-end;
text-align: center;
padding-top:12.5px;
padding-bottom:12.5px;
font-size:14px; // 폰트 크기
background-color:#5F0080; // 배경 보라
`

const 알림 = styled.button`
font-size: 14px;
font-weight: bold;
align-items:center;
margin-top: 0px;
background: #5F0080;
color: white;
border: none;
outline:none;
`
const 엑스 = styled.button`
font-size: 14px;
font-weight: bold;
margin-left:323px;
margin-top: 0px;
background: #5F0080;
color: white;
border: none;
outline:none;
`

const Header = styled.div` // 제일 위 메뉴
display:flex;
flex-direction:row;
margin-right: 338px;
justify-content:flex-end;
height:50px;
margin-top:3px;
`
const 새벽배송 = styled.button`
background: white;
margin-left: 300px; 
border: none;
outline:none;
`
const 회원가입 = styled.button`
font-size: 10px;
font-weight: bold;
margin-left:577px;
margin-top: 0px;
background: white;
color: #5F0080;
border: none;
outline:none;
`
const Button = styled.button`
font-size: 10px;
font-weight: bold;
margin-left:20px;
margin-top: 0px;
background: white;
border: none;
outline:none;
`

const 화살표 = styled.button` // 고객센터 옆 화살표
margin-left:0px;
margin-top:0px;
background: white;
border: none;
outline:none;
`

const Logo = styled.image` // 컬리로고
display: flex;
flex-direction: column;
align-items:center;
margin-right:10px;
margin-top: 0px;
background: white;
border: none;
outline:none;
`

const Menu = styled.div` // 메인메뉴
display:flex;
flex-direction:row;
justify-content: center;
width:100%;
height:50px;
margin-top:3px;
`
const 카테고리아이콘= styled.image` // 카테고리 로고
display: flex;
flex-direction: column;
align-items:left;
margin-top: 25px;
background: white;
border: none;
outline:none;
`

const 카테고리 = styled.button`
font-size: 14px;
font-weight: bold;
margin-left:10px;
margin-top:10px;
background: white;
border: none;
outline:none;
`
const 메뉴이름 = styled.button`
font-size: 14px;
font-weight: bold;
margin-left:60px;
margin-top:10px;
background: white;
border: none;
outline:none;
`

const 검색창= styled.image` 
display: flex;
flex-direction: column;
align-items:left;
margin-left: 102px;
margin-top: 16px;
background: white;
border: none;
outline:none;
`

const 메뉴아이콘= styled.image` 
display: flex;
flex-direction: column;
align-items:left;
margin-left: 9px;
margin-top: 19px;
background: white;
border: none;
outline:none;
`
const ImageSlide = styled.image` // 광고이미지 슬라이드
display: flex;
flex-direction: column;
margin-top: 10px;
background: white;
border: none;
outline:none;
width: 100%;
`

const GoodsRecommend = styled.div`
    margin-top: 87px;
    margin-bottom: 55px;
`
const GoodsRecommend_Gray = styled.div`
    margin-top: 87px;
    margin-bottom: 55px;
    height:470px;
    background-color: #EEEEEE;
`

const Eventtitle = styled.div`
    display: flex;
    font-size: 24px;
    padding-top: 60px;
    flex-direction: column;
    vertical-align: middle;
    align-items: center;
    margin-bottom: 16px;
`

const GoodsList = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    margin-right: 18px;
`

const Goods = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    margin-right: 10px;
`
  const EventImage = styled.image`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 0px;
    height: 230px;
    width: 180px;
    object-fit: cover;
    background: url(${(props) => props.src});
    background-size: 180px;
  `

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`

const Banner = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 901px; height: 125px;
  margin-top: 50px;
  margin-bottom: 50px;
`

const ViewAll = styled.div`
  display: inline-flex;
  align-items: center;
  width: 435px; height: 50px;
  border: 1px solid #E1E1E1;
  box-sizing: border-box;
  margin-top: 30px; margin-bottom: 30px;
  padding-top: 12px; padding-bottom: 10px;
  padding-left: 138px; padding-right: 100px;
`

function App() {
  const [data, setData] = useState();
    useEffect(async () => {
        const ID = window.localStorage.getItem('ID');
        try {
            const response = await axios.get(`http://localhost:8080/api/event/list`);
            setData(response.data);
            console.log(response.data);

        } catch (e) { console.log("error") }
    }, []
    )

  return (
    <div className="App">
      <Purple_header>
      <알림> 인기 제품 100원과 내 맘대로 무료배송 받으러 가기 > </알림>
      <엑스> x </엑스>
      </Purple_header>
      <Header>
        <새벽배송> <img src={delivery} /></새벽배송>
        <회원가입>회원가입</회원가입>
        <Button>|</Button>
        <Button>로그인</Button>
        <Button>|</Button>
        <Button>고객센터</Button>
        <화살표><img src={center} /></화살표>
      </Header>

      <Logo><img src={logo} /></Logo>

      <Menu>
        <카테고리아이콘><img s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       rc={cartegory} /></카테고리아이콘>
        <카테고리> 전체 카테고리</카테고리>
        <메뉴이름> 신상품 </메뉴이름>
        <메뉴이름> 베스트 </메뉴이름>
        <메뉴이름> 알뜰쇼핑 </메뉴이름>
        <메뉴이름> 특가/혜택 </메뉴이름>
        <검색창> <img src= {search} /> </검색창>
        <메뉴아이콘> <img src={place} /> </메뉴아이콘>
        <메뉴아이콘> <img src={shopping} /> </메뉴아이콘>
      </Menu>

      <ImageSlide><img src={advertising}/></ImageSlide>

      <GoodsRecommend>
              <Title><div className = "recommend">이 상품 어때요?</div></Title>
              <Product path={`http://localhost:8080/api/product/recommend`} />
      </GoodsRecommend>

      <GoodsRecommend_Gray>
        <Eventtitle><div className = "recommend">특가/혜택></div></Eventtitle>
        {data?.map((event, i) =>
            <GoodsList>
              <Goods>
                <EventImage src={"http://localhost:8080/"+ event.image}></EventImage>
                <h5 style={{ margin: "3px" }}>{event.event_name}</h5>
                <h6 style={{ color: "Gray", margin: "3px" }}>{event.event_description}</h6>
              </Goods>
            </GoodsList>)}
      </GoodsRecommend_Gray>


      <Title><div className = "recommend">놓치면 후회할 가격 > </div></Title>
      <Product path={`http://localhost:8080/api/product/sale`} />
      <div style = {{"display": "flex", "justify-content": "center"}}><Banner><img src= {banner} /></Banner></div>
      <Title><div className = "mdRecommend">MD의 추천</div></Title>
      <TagCategory />
      <Product path={`http://localhost:8080/api/product/md_choice/간식·과자·떡`} />
      <div style = {{"display": "flex", "justify-content": "center"}}><ViewAll>간식 과자 떡 전체보기 ></ViewAll></div>
    </div>
  );
}

export default App;
