//@func Post member
//@data in req.body from add form to database
//@method POST /members
export function postMember(data) {
  return fetch("/members", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

//@func get all members from database
//@data res.json() from database
//@method GET /members
export function getMembers() {
  return fetch("/members", {
    method: "GET",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

//@func Get member
//@data res.json() from database
//@method GET /members/:id
export function getMember(id) {
  return fetch("/members/" + id, {
    method: "GET",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

//@func Delete member
//@data res.json() deleted member
//@method DELETE /members/:id
export function deleteMember(id) {
  return fetch("/members/" + id, {
    method: "DELETE",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

//@func Get all friends of member by ID
//@data res.json() from database
//@method GET /members/:id/friends
export function getMemberFriends(id) {
  return fetch("/members/" + id + "/friends", {
    method: "GET",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

//@func add friendship between members
//@data req.param.id and req.body
//@method PATCH /members/:id/define
export function addFriendship(id, data) {
  return fetch("/members/" + id + "/define", {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}
