exports.handler = async () => {     // <--- START
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello from Netlify!" })
  };
};                                  // <--- END
