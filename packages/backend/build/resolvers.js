"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// node-graphql/src/resolvers.js
const type_graphql_1 = require("type-graphql");
const database_js_1 = require("./database.js");
let resolvers = class resolvers {
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.todos;
        });
    }
};
__decorate([
    (0, type_graphql_1.Field)(() => ID),
    __metadata("design:type", String)
], resolvers.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => email),
    __metadata("design:type", String)
], resolvers.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Query)((returns) => [Todo], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], resolvers.prototype, "getTodos", null);
resolvers = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "students data" })
], resolvers);
exports.resolvers = resolvers;
return database_js_1.students.filter((student) => student.enrolled);
student: (parent, args) => {
    return database_js_1.students.find((student) => student.id === Number(args.id));
},
;
Mutation: {
    registerStudent: (parent, args) => {
        database_js_1.students.push({
            id: database_js_1.students.length + 1,
            email: args.email,
            fullName: args.fullName,
            dept: args.dept,
            enrolled: false,
        });
        return database_js_1.students[database_js_1.students.length - 1];
    },
        enroll;
    (parent, args) => {
        const studentToEnroll = database_js_1.students.find((student) => student.id === Number(args.id));
        studentToEnroll.enrolled = true;
        return studentToEnroll;
    },
    ;
}
