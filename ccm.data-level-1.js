{
    var component = {

        name: 'data-level-1',
        //ccm: 'https://ccmjs.github.io/ccm/ccm.js',
        //ccm: 'https://github.com/ccmjs/ccm/blob/master/versions/ccm-16.7.0.min.js',
        ccm: 'https://akless.github.io/ccm/version/ccm-11.5.0.min.js',
        config: {
            //"store": ["ccm.store", { local: 'dataset.json' }]
            "store": [ "ccm.store", {store: 'data-level-2'}]
        },


        Instance: function () {

            /**
             * own reference for inner functions
             * @type {Instance}
             */
            const self = this;

            /**
             * shortcut to help functions
             * @type {Object.<string,function>}
             */
            let $;

            this.init = callback => {
                callback && callback();
            };
            this.ready = callback => {
                callback && callback();
            };
            this.render = callback => {
                callback && callback();
            };
            this.start = callback => {

                $ = self.ccm.helper;

                //console.log("ccm", ccm);

                //let store = ccm.store({local: 'dataset.json'}, console.log);
                //let store = ccm.store({store: 'testData2'}, console.log);

                //console.log(self.store);

                //ccm.store({store: 'data-level-2'});
                //self.store.set({key: 'hallo', value: 'welt'}, console.log);
                //self.store.get('hallo', console.log);








                self.store.set({
                        "key": 1,
                        "value": {
                            "first_name": "Brok",
                            "last_name": "Kopje"
                        }
                });

                self.store.set({
                    "key": 2,
                    "value": {
                        "first_name": "Raddie",
                        "last_name": "Grout"
                    }
                });

                self.store.set({
                    "key": 3,
                    "value": {
                        "first_name": "Filide",
                        "last_name": "Dalziell"
                    }
                });


                const data = self.store.get();

                data.forEach(function (element) {
                    console.log(element);
                });

                self.store.get(2, function(value) {
                    console.log(value);
                });

                /*
                 * Update dataset with key "2" and values given
                 */
                self.store.set({
                    "key": 2,
                    "value": {
                        "first_name": "Elicia",
                        "last_name": "Giorgini"
                    }
                });

                /*
                 * Deletes dataset with key "2"
                 */
                self.store.del(2);

                //self.store.del('hallo', console.log);
                //let store = ccm.store($.data_store);
                // let store = ccm.store();

                //console.log("Store", store);

                /*let store_set = store.set([
                        {
                            "img_src": "resources/card.svg",
                            "img_alt": "Karte 1",
                            "card_title": "Karte 1",
                            "card_text": "Lorem Ipsum",
                            "stars": 3
                        },
                        {
                            "img_src": "resources/card.svg",
                            "img_alt": "Karte 2",
                            "card_title": "Karte 2",
                            "card_text": "Lorem Ipsum",
                            "stars": 2
                        },
                        {
                            "img_src": "resources/card.svg",
                            "img_alt": "Karte 3",
                            "card_title": "Karte 3",
                            "card_text": "Lorem Ipsum",
                            "stars": 5
                        }
                ]);

                console.log("SET()", store_set);*/

                /*let store_get = store.get();

                console.log("GET()", store_get);*/

                callback && callback();
            };

        }

    };

    function p() {
        window.ccm[v].component(component)
    }

    const f = "ccm." + component.name + (component.version ? "-" + component.version.join(".") : "") + ".js";
    if (window.ccm && null === window.ccm.files[f]) window.ccm.files[f] = component; else {
        const n = window.ccm && window.ccm.components[component.name];
        n && n.ccm && (component.ccm = n.ccm), "string" == typeof component.ccm && (component.ccm = {url: component.ccm});
        var v = component.ccm.url.split("/").pop().split("-");
        if (v.length > 1 ? (v = v[1].split("."), v.pop(), "min" === v[v.length - 1] && v.pop(), v = v.join(".")) : v = "latest", window.ccm && window.ccm[v]) p(); else {
            const e = document.createElement("script");
            document.head.appendChild(e), component.ccm.integrity && e.setAttribute("integrity", component.ccm.integrity), component.ccm.crossorigin && e.setAttribute("crossorigin", component.ccm.crossorigin), e.onload = function () {
                p(), document.head.removeChild(e)
            }, e.src = component.ccm.url
        }
    }
}