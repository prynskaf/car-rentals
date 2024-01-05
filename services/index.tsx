import request, { gql } from "graphql-request";
import React from "react";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        image {
          imageCarList {
            image {
              url
            }
          }
        }
        carType
        carAvg
        carBrand
      }
    }
  `;

  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqzfqlto0kg401ta94xa2g5k/master",
    query
  );
  return result;
};
