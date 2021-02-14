module.exports={
    configureWebpack:{
        resolve:{
            //配置别名,@是 src
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'network':'@/network',
                'views':'@/views',

            }
        }
    }
}