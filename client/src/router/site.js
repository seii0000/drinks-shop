const site = [
    {
        path: "/",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-home",
                component: () => import("../pages/site/SiteHome.vue"),
            },
        ],
        
    },
    {
        path: "/info",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-product",
                component: () => import("../pages/site/InfoPage.vue"),
            },
        ],
    },
    {
        path: "/introduce",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-introduce",
                component: () => import("../pages/site/IntroPage.vue"),
            },
        ],
    },
    {
        path: "/menu",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-menu",
                component: () => import("../pages/site/MenuPage.vue"),
            },
        ],
    },
    {
        path: "/account/user-info",
        children: [
            {
                path: "",
                name: "site-drinks",
                component: () => import("../pages/site/UserInfo.vue"),
            }
        ]
    },
    {
        path: "/menu/cart",
        children: [
            {
                path: "",
                name: "site-cart",
                component: () => import("../pages/site/CartPage.vue"),
            }
        ]  
    },
    {
        path: "/menu/drinks/oleato",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-oleato",
                component: () => import("../pages/site/ProduceSite.vue"),
            },
        ],
    }, 
    {
        path: "/menu/product/:id/hot",
        
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-hot",
                component: () => import("../pages/site/InfoProduct.vue"),
            },
        ],
    }, 
    {
        path: "/menu/product/:id/hot/nutrition",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-nutrition",
                component: () => import("../pages/site/ColdNutrition.vue"),
            },
        ],
    },
    {
        path: "/account/sign-in",
        children: [
            {
                path: "",
                name: "site-signin",
                component: () => import("../pages/site/SignIn.vue"),
            },
        ],
    },
    {
        path: "/account/create",
        children: [
            {
                path: "",
                name: "site-signup",
                component: () => import("../pages/site/SignUp.vue")
            }
        ]
    },
    {
        path: "/news",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-news",
                component: () => import("../pages/site/NewsSite.vue")
            }
        ]
    },
    {
        path: "/news/:id",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-news-detail",
                component: () => import("../pages/site/NewsItem.vue")
            }
        ]
    },
    {
        path: "/menu/previous",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-previous",
                component: () => import("../pages/site/PreviousPage.vue")
            }
        ]
    },
    {
        path: "/menu/favorites",
        component: () => import("../layouts/SiteLayout.vue"),
        children: [
            {
                path: "",
                name: "site-favorites",
                component: () => import("../pages/site/FavoritesPage.vue")
            }
        ]
    }
]
export default site;