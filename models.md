\*\*\*Users
Id: {
type: UUID
defaultValue: {
type: UUIDV4

userName: {
type: STRING

Password: {
type: UUID

firstName: {
type: STRING

lastName: {
type: STRING

profilePic: {
type: STRING

age: {
type: INTEGER

bio: {
type: TEXT

location: {
type: STRING
////////////////////////////////

\*\*\*Community
id: {
type: UUID
defaultValue: {
type: UUIDV4

name: {
type: STRING

bio: {
type: TEXT

location: {
type: STRING
allowNull: true

profilePic: {
Type: STRING
////////////////////////////////

\*\*\*Artifacts
Id: {
type: UUID
defaultValue: {
type: UUIDV4

name: {
type: STRING

pic: {
type: STRING
////////////////////////////////

\*\*\*Posts
Id: {
type: UUID
defaultValue: {
type: UUIDV4

content: {
type: TEXT

Comments
comment: {
type: TEXT
