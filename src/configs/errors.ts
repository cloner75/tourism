export default {
  status: {
    200: {
      success: true,
      message: 'OK',
    },
    201: {
      message: 'Created',
      success: true
    },
    202: {
      message: 'Accepted',
      success: true,
    },
    203: {
      message: 'Non- authoritative Information',
      success: true

    },
    204: {
      message: 'No Content',
      success: true
    },
    205: {
      message: 'Reset Content',
      success: true

    },
    206: {
      message: 'Partial Content',
      success: true

    },
    207: {
      message: 'Multi - Status',
      success: true
    },
    208: {
      message: 'Already Reported',
      success: true
    },
    226: {
      message: 'IM Used',
      success: true
    },

    400: {
      success: false,
      message: 'Bad Request'
    },
    401: {
      success: false,
      message: 'Unauthorized'
    },
    402: {
      success: false,
      message: ' Payment Required'
    },
    403: {
      success: false,
      message: 'Forbidden'
    },
    404: {
      success: false,
      message: 'Not Found'
    },
    405: {
      success: false,
      message: 'Method Not Allowed'
    },
    406: {
      success: false,
      message: 'Not Acceptable'
    },
    407: {
      success: false,
      message: 'Proxy Authentication Required'
    },
    408: {
      success: false,
      message: 'Request Timeout'
    },
    409: {
      success: false,
      message: 'Conflict'
    },
    410: {
      success: false,
      message: 'Gone'
    },
    411: {
      success: false,
      message: 'Length Required'
    },
    412: {
      success: false,
      message: 'Precondition Failed'
    },
    413: {
      success: false,
      message: 'Payload Too Large'
    },
    414: {
      success: false,
      message: 'Request- URI Too Long'
    },
    415: {
      success: false,
      message: ' Unsupported Media Type'
    },
    416: {
      success: false,
      message: 'Requested Range Not Satisfiable'
    },
    417: {
      success: false,
      message: 'Expectation Failed'
    },
    418: {
      success: false,
      message: "I'm a teapot"
    },
    421: {
      success: false,
      message: 'Misdirected Request'
    },
    422: {
      success: false,
      message: ' Unprocessable Entity'
    },
    423: {
      success: false,
      message: 'Locked'
    },
    424: {
      success: false,
      message: 'Failed Dependency'
    },
    426: {
      success: false,
      message: 'Upgrade Required'
    },
    428: {
      success: false,
      message: 'Precondition Required'
    },
    429: {
      success: false,
      message: 'Too Many Requests'
    },
    431: {
      success: false,
      message: 'Request Header Fields Too Large'
    },
    444: {
      success: false,
      message: 'Connection Closed Without Response'
    },
    451: {
      success: false,
      message: 'Unavailable For Legal Reasons'
    },
    499: {
      success: false,
      message: 'Client Closed Request'
    },
    500: {
      success: false,
      message: 'Internal Server Error'
    },
    501: {
      success: false,
      message: 'Not Implemented'
    },
    502: {
      success: false,
      message: 'Bad Gateway'
    },
    503: {
      success: false,
      message: 'Service Unavailable'
    },
    504: {
      success: false,
      message: 'Gateway Timeout'
    },
    505: {
      success: false,
      message: 'HTTP Version Not Supported'
    },
    506: {
      success: false,
      message: 'Variant Also Negotiates'
    },
    507: {
      success: false,
      message: 'Insufficient Storage'
    },
    508: {
      success: false,
      message: 'Loop Detected'
    },
    510: {
      success: false,
      message: 'Not Extended'
    },
    511: {
      success: false,
      message: 'Network Authentication Required'
    },
    599: {
      success: false,
      message: 'Network Connect Timeout Error'
    },
  }
}