module.exports = {
    configure_credentials: function(AWS)
    {
        // AWS.config.region = 'us-west-2'; // Region
        // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        //     IdentityPoolId: 'us-west-2:fa17c899-4319-4048-a8ff-fa2a7fd73868',
        // });
        // Initialize the Amazon Cognito credentials provider
        AWS.config.region = 'us-east-1'; // Region
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:07c2f2e4-d23a-4190-8e34-fae91b014656',
        });

    },
    get_time: function () {
        return new Date().toISOString().replace('Z', '')
            .replace('T', ' ');
    }
};