import { createSlice } from "@reduxjs/toolkit";


const itemsSlice=createSlice({
  name:'items',
  initialState:[{
    id:"001",
    image: "images/page1-1.png",
    rating:{
      star:"4.3",
      likes:"9.3k"
    },
    company:"Mast & Harbour",
    item:"Men Casual Sustainable Shirt",
    price:{
      current:899,
      actual:2399,
      discount:1500,
    },
    size:"L"
      },
      {
        id:"002",
        image: "images/page1-2.png",
        rating:{
          star:"4",
          likes:"76"
        },
        company:"Biba",
        item:"Floral Printed Kurta With A-Line Jacket & Mask",
        price:{
          current:1499,
          actual:2999,
          discount:1500,
        },
        size:"M"
          }
          ,
      {
        id:"003",
        image: "images/page1-3.png",
        rating:{
          star:"5",
          likes:"13k"
        },
        company:"H&M",
        item:"Girls Printed Drop Shoulder Sweartshirt",
        price:{
          current:799,
          actual:2399,
          discount:1000,
        },
        size:"6Y"
          },
          {
            id:"004",
            image: "images/page1-4.png",
            rating:{
              star:"4.2",
              likes:"33.3k"
            },
            company:"HRX by Hrithik Roshan",
            item:"Men White And Blue Memory Foam Technology Running Shoes",
            price:{
              current:999,
              actual:2999,
              discount:2000,
            },
            size:8
              },
              {
                id:"005",
                image: "images/page1-5.png",
                rating:{
                  star:"4.3",
                  likes:"701"
                },
                company:"Nasher Miles",
                item:"Paris Textured Hard-Sided Large Trolley Suitcase",
                price:{
                  current:5699,
                  actual:17995,
                  discount:12296,
                },
                size:"L"
                  },
                  {
                    id:"006",
                    image: "images/page1-6.png",
                    rating:{
                      star:"4.3",
                      likes:"9.3k"
                    },
                    company:"Timex",
                    item:"Unisex Leather Straps Analogue His and Her Watches TW00PR300Men Casual Sustainable Shirt",
                    price:{
                      current:3356,
                      actual:4795,
                      discount:1439,
                    },
                    size:"L"
                      },
                      {
                        id:"007",
                        image: "images/page1-7.png",
                        rating:{
                          star:"3.5",
                          likes:"1k"
                        },
                        company:"Van Heusen",
                        item:"Men Textured Super Slim-Fit Single Breasted Formal Blazer",
                        price:{
                          current:5199,
                          actual:7999,
                          discount:2800,
                        },
                        size:"40"
                          },
                          {
                            id:"008",
                            image: "images/page1-8.png",
                            rating:{
                              star:"4.3",
                              likes:"3k"
                            },
                            company:"Pepe Jeans",
                            item:"Men Light Fade Straight Fit Jeans",
                            price:{
                              current:1763,
                              actual:3599,
                              discount:1836,
                            },
                            size:"32"
                              },
                              {
                                id:"009",
                                image: "images/page1-9.png",
                                rating:{
                                  star:"4.3",
                                  likes:"9.3k"
                                },
                                company:"Sera",
                                item:"Women Multicoloured Printed Tie-Up Shrug",
                                price:{
                                  current:597,
                                  actual:1494,
                                  discount:897,
                                },
                                size:"M"
                                  }],
  reducers:{
    add:(store)=>{
      console.log("added");
      return store;
    }
  }
})
export const itemsAction=itemsSlice.actions;
export default itemsSlice;