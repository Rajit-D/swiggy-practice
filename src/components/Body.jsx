import React, { useState, useEffect } from "react";
import RestaurantCard ,
{ withPromotedLabel } 
from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import PromotedRestaurantCard from "./promotedRestaurantCard";


const Body = () => {
  const resList = [
    {
      info: {
        id: "79522",
        name: "Domino's Pizza",
        cloudinaryImageId: "umasvrjvfwqwv8fsacf5",
        locality: "Upohar Town Center",
        areaName: "Pancha Sayar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "79522",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "2456",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-upohar-town-center-pancha-sayar-kolkata-79522",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "16702",
        name: "Chowman",
        cloudinaryImageId: "06d12ec700e4118d159fab6c3a7256dd",
        locality: "Garia",
        areaName: "Garia",
        costForTwo: "₹700 for two",
        cuisines: [
          "Chinese",
          "Asian",
          "Thai",
          "Oriental",
          "Burmese",
          "Tibetan",
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "16702",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5100,
        },
        parentId: "266",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/chowman-garia-kolkata-16702",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "8914",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Ruby",
        areaName: "East Kolkata Township",
        costForTwo: "₹350 for two",
        cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "8914",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4400,
        },
        parentId: "2",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-ruby-east-kolkata-township-kolkata-8914",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "416877",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        locality: "Chak Garia",
        areaName: "Highland Park",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "416877",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "547",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-chak-garia-highland-park-kolkata-416877",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "216675",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Kasba",
        areaName: "East Kolkata Township",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "216675",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4400,
        },
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "EVERY ITEM",
          subHeader: "@ ₹129",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-kasba-east-kolkata-township-kolkata-216675",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "364444",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Garia Road",
        areaName: "Ramkrishna Nagar",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas", "Fast Food"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "364444",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5900,
        },
        parentId: "721",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "39 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-02 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-garia-road-ramkrishna-nagar-kolkata-364444",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "48442",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "Survey Park",
        areaName: "Santoshpur",
        costForTwo: "₹400 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.6,
        veg: true,
        feeDetails: {
          restaurantId: "48442",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "5588",
        avgRatingString: "4.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 0.8,
          serviceability: "SERVICEABLE",
          slaString: "17 mins",
          lastMileTravelString: "0.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-02 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-survey-park-santoshpur-kolkata-48442",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "101040",
        name: "Wow! Momo",
        cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
        locality: "E M Bypass",
        areaName: "E M Bypass",
        costForTwo: "₹300 for two",
        cuisines: [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "101040",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "1776",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "EVERY ITEM",
          subHeader: "@ ₹99",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/wow-momo-e-m-bypass-kolkata-101040",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "212490",
        name: "Faasos - Wraps & Rolls",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "KASBA INDUSTRIAL ESTATE",
        areaName: "East Kolkata Township",
        costForTwo: "₹500 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "212490",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4400,
        },
        parentId: "21809",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-kasba-industrial-estate-east-kolkata-township-kolkata-212490",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "212492",
        name: "Behrouz Biryani",
        cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
        locality: "KASBA INDUSTRIAL ESTATE",
        areaName: "East Kolkata Township",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "Mughlai",
          "North Indian",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "212492",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5100,
        },
        parentId: "1803",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "39 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/behrouz-biryani-kasba-industrial-estate-east-kolkata-township-kolkata-212492",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "212493",
        name: "Oven Story Pizza - Standout Toppings",
        cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
        locality: "KASBA INDUSTRIAL ESTATE",
        areaName: "East Kolkata Township",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "212493",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5100,
        },
        parentId: "3534",
        avgRatingString: "4.1",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-kasba-industrial-estate-east-kolkata-township-kolkata-212493",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "216739",
        name: "The Good Bowl",
        cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
        locality: "KASBA INDUSTRIAL ESTATE",
        areaName: "East Kolkata Township",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "216739",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4400,
        },
        parentId: "7918",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-good-bowl-kasba-industrial-estate-east-kolkata-township-kolkata-216739",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "418772",
        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        cloudinaryImageId: "coaah3prd6xpbwb0blmu",
        locality: "WEST CHOWBHAGA",
        areaName: "Ruby Area",
        costForTwo: "₹300 for two",
        cuisines: ["Ice Cream"],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "418772",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 7200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 7200,
        },
        parentId: "582",
        avgRatingString: "4.5",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 6,
          serviceability: "SERVICEABLE",
          slaString: "40 mins",
          lastMileTravelString: "6.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:55:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹399",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-west-chowbhaga-ruby-area-kolkata-418772",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "19126",
        name: "Cafe Coffee Day",
        cloudinaryImageId: "b925459fbc1faf59f02f7289eb079a74",
        locality: "Garia",
        areaName: "Santoshpur",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Burgers",
          "Ice Cream",
          "Bakery",
          "Fast Food",
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "19126",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3900,
        },
        parentId: "1",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹699",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/cafe-coffee-day-garia-santoshpur-kolkata-19126",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "41610",
        name: "Mio Amore - The Cake Shop",
        cloudinaryImageId: "8bf25e6cafe30c7e7c9c8f31f628fe96",
        locality: "Beside Patuli Police Station",
        areaName: "Patuli",
        costForTwo: "₹150 for two",
        cuisines: ["Desserts", "Bakery", "Snacks"],
        avgRating: 4.6,
        feeDetails: {
          restaurantId: "41610",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "292958",
        avgRatingString: "4.6",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 21:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mio-amore-the-cake-shop-beside-police-station-patuli-kolkata-41610",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "326540",
        name: "Natural Ice Cream",
        cloudinaryImageId: "ftw6rauxhbsx09i1isuu",
        locality: "Lake Road",
        areaName: "Southern Avenue",
        costForTwo: "₹150 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.7,
        veg: true,
        feeDetails: {
          restaurantId: "326540",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 7400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 7400,
        },
        parentId: "2093",
        avgRatingString: "4.7",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 6.9,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "6.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-02 00:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/natural-ice-cream-lake-road-southern-avenue-kolkata-326540",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "212503",
        name: "Sweet Truth - Cake and Desserts",
        cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
        locality: "KASBA INDUSTRIAL ESTATE",
        areaName: "East Kolkata Township",
        costForTwo: "₹450 for two",
        cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
        avgRating: 4.5,
        feeDetails: {
          restaurantId: "212503",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4900,
        },
        parentId: "4444",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-kasba-industrial-estate-east-kolkata-township-kolkata-212503",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "212495",
        name: "Firangi Bake",
        cloudinaryImageId: "mjkcprgtykulg7f0kswz",
        locality: "KASBA INDUSTRIAL ESTATE",
        areaName: "East Kolkata Township",
        costForTwo: "₹500 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Mexican",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "212495",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4900,
        },
        parentId: "3952",
        avgRatingString: "4.2",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/firangi-bake-kasba-industrial-estate-east-kolkata-township-kolkata-212495",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "212504",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId: "tzas3kpaye85eibsnffa",
        locality: "KASBA INDUSTRIAL ESTATE",
        areaName: "East Kolkata Township",
        costForTwo: "₹300 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "212504",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4400,
        },
        parentId: "4925",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-kasba-industrial-estate-east-kolkata-township-kolkata-212504",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "10740",
        name: "Arsalan",
        cloudinaryImageId: "vkscszau8j6n7ce0anhi",
        locality: "Kasba",
        areaName: "Kasba",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "Mughlai",
          "North Indian",
          "Indian",
          "Kebabs",
          "Tandoor",
          "Awadhi",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "10740",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5100,
        },
        parentId: "1255",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/arsalan-kasba-kolkata-10740",
        type: "WEBLINK",
      },
    },
  ];

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  function filterList(list) {
    const filterList = filteredList.filter((res) => res.info.avgRating > 4.3);
    setfilteredList(filterList);
    setfilterBtnText("Cancel Filter");
    setshowBtn(true);
  }

  const [list, setlist] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterBtnText, setfilterBtnText] = useState("Filter");
  const [showBtn, setshowBtn] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const body = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4805955&lng=88.41160649999999&page_type=DESKTOP_WEB_LISTING"
    );
    const dataJSON = await body.json();
    // console.log(dataJSON);
    setlist(
      dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredList(
      dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  // console.log("Restaurant list " + list)

  if (!onlineStatus)
    return (
      <h1>Looks like you are offline, check your internet connection again</h1>
    );

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-button"
          onClick={() => {
            if (searchText.length === 0) {
              alert("Search text cannot be empty");
            } else {
              const filteredRestaurants = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setfilteredList(filteredRestaurants);
              // setfilterBtnText("Cancel Filter");
            }
          }}
        >
          &#128269;
        </button>
        <button onClick={() => filterList(list)} className="login-button">
          {filterBtnText}
        </button>
        {showBtn && (
          <button
            onClick={() => {
              setfilteredList(list);
              setfilterBtnText("Filter");
              setshowBtn(false);
            }}
            class="close-button"
          >
            ✖
          </button>
        )}
      </div>
      <div className="res-container">
        {filteredList.length === 0 ? (
          <h1>Your search for "{searchText}" did not match any results</h1>
        ) : (
          filteredList.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <PromotedRestaurantCard resDetails = {restaurant}/>
              ) : (
                <RestaurantCard resDetails={restaurant} />
              )}
              {/* <RestaurantCard resDetails={restaurant} /> */}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
