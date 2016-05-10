# Customer Satisfaction Example App

This is a simple app using C3.js to create charts using data from Domo.

## Hooking up to real data

This sample app, will work locally without connecting it to Domo data by using sample data. But you can test this app out with real data from Domo. To do so, you'll first need to create 4 data sources in Domo. To create each data source in Domo, choose the Excel connector, and then one at a time, upload the files in the `data` directory of this project. Then get the data set id for each data source. This id can be obtained by viewing the data source in Domo and looking at the url.

    https://company.domo.com/datasources/f3bd3e25-b686-401d-ad2f-a414f4ea61f4

Then replace each `dataSetId` in the `manifest.json` file with the correct id. If this works successfully, then you will no longer see the messages in the console saying that sample data is being used. This will get data from Domo when you're working locally as well as when you publish the app to Domo.

If you want to test out the app on Domo with the sample data, you'll have to remove everything in the `mapping` array in the `manifest.json` file. Otherwise, you won't be able to publish.

See the [documentation](https://domoapps.herokuapp.com/) for more information.
