export default {
  errors: {
    0: "Undefined error from server.",
    1: "Please send all required data.",
    2: "Type of data that you sent is not in correct type.",
    3: "Something went wrong in server, we will check it as soon as possible.",
    4: "Not found.",
    5: "Unauthorized.",
    6: "Content-Type must be application/json.",
    7: "API-KEY is not in correct format.",
    8: "Duplicate key error for unique variable.",
    9: "Not found route.",
    10: "Field Is Empty.",
    11: "Should Have A Minimum Length Of {#limit}.",
    12: "Should Have A Maximum Length Of {#limit}.",
    13: "Should Have Following This Pattern.",
    14: "Forbidden Access",
    15: "Bad Request",
  },
  httpErrors:{
    500: "Something went wrong in server, we will check it as soon as possible.",
    404: "Not found.",
    401: "Unauthorized.",
    408: "Duplicate key error for unique variable.",
    204: "Field Is Empty.",
    403: "Forbidden Access",
    400: "Bad Request",
  },
  defaultFields: {
    user: ["_id"],
    file: ["_id"]
  },
};
