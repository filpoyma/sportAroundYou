import 'whatwg-fetch';

import MOCKED_ENDPOINTS from '@/utils/mocks';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function returnMockedPromise(url) {
  let mockedData;

  MOCKED_ENDPOINTS.forEach(({ endpoint, data }) => {
    if (endpoint.test(url)) {
      mockedData = data;
    }
  });

  if (!mockedData) {
    return null;
  }

  return new Promise(resolve => {
    resolve(mockedData);
  });
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options = {}) {
  const fetchOptions = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: TOKEN
    },
    ...options
  };

  if (!API_URL) {
    const mockedRequest = returnMockedPromise(url);

    // Check what we have mocked version of the endpoint
    if (typeof mockedRequest?.then === 'function') {
      return mockedRequest;
    }
  }

  return fetch(url, fetchOptions)
    .then(checkStatus)
    .then(parseJSON);
}
