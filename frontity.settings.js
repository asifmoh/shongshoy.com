const settings = {
  "name": "shongshoy-app",
  "state": {
    "frontity": {
      "url": "https://shongshoy.live",
      "title": "সংশয় - চিন্তার মুক্তির আন্দোলন",
      "description": "জ্ঞান যেখানে সীমাবদ্ধ, যুক্তি যেখানে আড়ষ্ট, মুক্তি সেখানে অসম্ভব"
    }
  },
   "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "মূলপাতা",
              "/"
            ],
            [
              "আর্কাইভ",
              "/references/archive/"
            ],
            [
              "ইসলাম",
              "/references/islam/"
            ],
            [
              "হিন্দু",
              "/references/hinduism/"
            ],
            [
              "খ্রিস্ট",
              "/references/christianity/"
            ],
            [
              "গ্রন্থাগার",
              "/library/"
            ],
            [
              "নিয়মাবলী",
              "/about/terms-service-privacy-policy/"
            ],
            [
              "নীতিমালা",
              "/rules/"
            ],
            [
              "উত্তরসমূহ",
              "/faq/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.nastikya.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/wp-comments"
  ]
};

export default settings;
