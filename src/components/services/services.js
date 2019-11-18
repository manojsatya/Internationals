export function postMember(data) {
  return fetch("/members", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export function getMembers() {
  return fetch("/members", {
    method: "GET",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export function getMember(id) {
  return fetch("/members/" + id, {
    method: "GET",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export function deleteMember(id) {
  return fetch("/members/" + id, {
    method: "DELETE",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export function getMemberFriends(id) {
  return fetch("/members/" + id + "/friends", {
    method: "GET",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export function addFriendship(id, data) {
  return fetch("/members/" + id + "/define", {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}
