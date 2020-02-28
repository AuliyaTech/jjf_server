const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../../models');
const axios = require("axios");
const cheerio = require("cheerio")
const Prismic = require("prismic-javascript")

// ===== Getting Info From Prismic =======

const apiEndpoint = "https://jiafitness.prismic.io/api/v2"


// Get about
router.get("/", (req, res) =>{
    Prismic.getApi(apiEndpoint, { req: req }).then(function(api) {
        return api.query(""); // An empty query will return all the documents
    }).then(function(response) {
        console.log("Documents: ", response.results);
    }, function(err) {
        console.log("Something went wrong: ", err);
    });
})