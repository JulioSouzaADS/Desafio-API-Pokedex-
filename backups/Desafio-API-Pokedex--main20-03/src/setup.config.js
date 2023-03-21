module.exports = {
    async headers () {
        return [
            {
                source: '/:path*',
                headers: [

                    { key: 'Acess-Control-Allow-Credentials', value: 'true'},
                    { key: 'Acess-Control-Allow-Origin', value: '*'},
                    { key: 'Acess-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST'},
                    { key: 'Acess-Control-Allow-Credentials', value: 'X-CSRF-Token,X-requested-with'}
         
                ]


                } 
        ]
    }
}