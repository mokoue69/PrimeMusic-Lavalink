

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1140931460526784554", ""], 
  mongodbUri : "mongodb+srv://doneb55496:CygbEp6FYiijWtBG@cluster0.85zlgrj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "moko",
      password: "yourpasswordhere",
      host: "160.191.77.60",
      port:  8430,
      secure: false
    }
  ]
}
