import React, {useEffect} from "react";
import {useState} from "react";
import styled from "styled-components";

const TagList = styled.div`
  margin-top: 16px;
`

const Tag = styled.button`
  display: inline-flex;
  flex-direction: row;
  font-size: 12px;
  height: 32px;
  border-radius: 20px;
  border: none;
  outline: none;
  padding-top: 9px; padding-bottom: 9px;
  padding-left: 13px; padding-right: 13px;
  margin-right: 11px;
  color: ${props => props.color};
  background: ${props => props.background};
  
  &:hover {
    color: #810080;
    background: #F7F3F8;
  } 
  &:active {
    color: #FFFFFF;
    background: #5F0080;
  }
`

function TagCategory() {
    const [select_Tag, setTag] = useState();
    useEffect(() => {
            try {
                setTag(9);
            } catch (e) {
                console.log(e)
            }
        }, []
    )
    const onChangeTag = (e, id) => {
        e.preventDefault();
        if (id === select_Tag) {
            setTag(0);
            console.log(select_Tag)
        } else {
            setTag(id);
        }
    };
    return (
        <div style={{"margin-top": "25px", "margin-bottom": "30px"}}>
            <TagList>
                <Tag color={select_Tag === 1 ? "#FFFFFF":"#000000"} background= {select_Tag === 1 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 1)}>채소</Tag>
                <Tag color={select_Tag === 2 ? "#FFFFFF":"#000000"} background= {select_Tag === 2 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 2)}>과일 · 견과 · 쌀</Tag>
                <Tag color={select_Tag === 3 ? "#FFFFFF":"#000000"} background= {select_Tag === 3 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 3)}>수산 · 해산 · 건어</Tag>
                <Tag color={select_Tag === 4 ? "#FFFFFF":"#000000"} background= {select_Tag === 4 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 4)}>정육 · 계란</Tag>
                <Tag color={select_Tag === 5 ? "#FFFFFF":"#000000"} background= {select_Tag === 5 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 5)}>국 · 반찬 · 메인요리</Tag>
                <Tag color={select_Tag === 6 ? "#FFFFFF":"#000000"} background= {select_Tag === 6 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 6)}>샐러드 · 간편식</Tag>
                <Tag color={select_Tag === 7 ? "#FFFFFF":"#000000"} background= {select_Tag === 7 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 7)}>면 · 양념 · 오일</Tag>
            </TagList>
            <TagList>
                <Tag color={select_Tag === 8 ? "#FFFFFF":"#000000"} background= {select_Tag === 8 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 8)}>생수·음료·우유·커피</Tag>
                <Tag color={select_Tag === 9 ? "#FFFFFF":"#000000"} background= {select_Tag === 9 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 9)}>간식 · 과자 · 떡</Tag>
                <Tag color={select_Tag === 10 ? "#FFFFFF":"#000000"} background= {select_Tag === 10 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 10)}>베이커리 · 치즈 · 델리</Tag>
                <Tag color={select_Tag === 11 ? "#FFFFFF":"#000000"} background= {select_Tag === 11 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 11)}>건강식품</Tag>
                <Tag color={select_Tag === 12 ? "#FFFFFF":"#000000"} background= {select_Tag === 12 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 12)}>생활용품 · 리빙</Tag>
                <Tag color={select_Tag === 13 ? "#FFFFFF":"#000000"} background= {select_Tag === 13 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 13)}>스킨케어 · 메이크업</Tag>
                <Tag color={select_Tag === 14 ? "#FFFFFF":"#000000"} background= {select_Tag === 14 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 14)}>헤어· 바디·구강</Tag>
            </TagList>
            <TagList>
                <Tag color={select_Tag === 15 ? "#FFFFFF":"#000000"} background= {select_Tag === 15 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 15)}>주방용품</Tag>
                <Tag color={select_Tag === 16 ? "#FFFFFF":"#000000"} background= {select_Tag === 16 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 16)}>가전제품</Tag>
                <Tag color={select_Tag === 17 ? "#FFFFFF":"#000000"} background= {select_Tag === 17 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 17)}>베이비·키즈</Tag>
                <Tag color={select_Tag === 18 ? "#FFFFFF":"#000000"} background= {select_Tag === 18 ? "#5F0080":"#F7F7F7"} onClick={(e) => onChangeTag(e, 18)}>반려동물</Tag>
            </TagList>
        </div>
    );
}

export default TagCategory;