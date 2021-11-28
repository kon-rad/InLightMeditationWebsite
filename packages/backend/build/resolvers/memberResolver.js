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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Members_1 = require("../schemas/Members");
let MemberResolver = class MemberResolver {
    constructor() {
        this.members = [];
    }
    getMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.members;
        });
    }
    addMember({ name, email, bio }) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = {
                id: Math.random(),
                name,
                email,
                bio,
            };
            yield this.members.push(member);
            return member;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [Members_1.Member], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MemberResolver.prototype, "getMembers", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Members_1.Member),
    __param(0, (0, type_graphql_1.Arg)('memberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof MemberInput !== "undefined" && MemberInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], MemberResolver.prototype, "addMember", null);
MemberResolver = __decorate([
    (0, type_graphql_1.Resolver)((of) => Members_1.Member)
], MemberResolver);
exports.MemberResolver = MemberResolver;
