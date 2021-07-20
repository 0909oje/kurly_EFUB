import React from 'react';
import './product.css';
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from 'axios';

const GoodsList = styled.div`
    margin-right: 18px; 
`

const Image = styled.div`
  margin-bottom: 16px;
`

const GoodsDetail = styled.div`
    text-align: left;
`

const Name = styled.div`
    font-size: 13px;
    margin-bottom: 5px;
    width: 212px;
`
const SalePrice = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
`

const DC = styled.div`
    display: inline-flex;
    flex-direction: row;
    color: #FA622F;
    margin-right: 5px;
`

const Price = styled.div`
    display: inline-flex;
    flex-direction: row;
    font-weight: bold;
`

const Cost = styled.div`
    font-weight: bold;
    font-size: 13px;
    text-decoration-line: line-through;
    color: #999999;
`

function Product({path}) {
    const [data, product] = useState();
    useEffect(async () => {
            try {
                const response = await axios.get(path);
                product(response.data);
            } catch (e) {
                console.log(e)
            }
        }, []
    )

    return (
        <div style={{"display": "inline-flex", "flex-direction": "row", "justify-content": "center"}}>
            {data?.map((product, i) => {
                if (i <= 3)
                return(
                    <GoodsList>
                        <Image><img className="productImg" src={"http://localhost:8080/"+product.product_image} /></Image>
                        <GoodsDetail>
                            <Name>{product.product_name}</Name>
                                {(()=>{
                                        if(product.sale!==0.0){
                                            return (
                                                <div>
                                                <SalePrice>
                                                <DC>{(product.sale*100).toFixed()}%</DC>
                                                <Price>{Math.floor(product.product_price * product.sale)}원</Price>
                                                </SalePrice>
                                                <Cost>{product.product_price}</Cost>
                                                </div>
                                            )
                                        } else {
                                            return(
                                                <SalePrice>
                                                <Price>{product.product_price}원</Price>
                                                </SalePrice>
                                            )
                                        }
                                    })()}
                        </GoodsDetail>
                    </GoodsList>);
                }
            )}
        </div>

);
}

export default Product;