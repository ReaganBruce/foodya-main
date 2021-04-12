import db from "../db";
import config from "../config"
import * as passport from "passport";
import * as PassportJWT from "passport-jwt";
import * as PassportLocal from "passport-local";
import { compareHash } from '../utils/passwords';
import { Payload } from "../types"
import { Application } from "express";

export function configurePassport(app: Application){

    passport.serializeUser((user: Payload, done) => {
        if(user.password){
            delete user.password;
        }
        done(null, user)
    })
    passport.deserializeUser((user, done) => done(null, user))
    
    
    //req.body.email, req.body.password
    passport.use(new PassportLocal.Strategy({
        usernameField: "username",
        session: false
    }, async (username, password, done) => {
        //done(error, user)
        try {
            const [userFound]: any = await db.user.find("username", username);
            if (userFound && compareHash(password, userFound.password)) {
                delete userFound.password;
                done(null, userFound);
            }else {
                done(null, false, { message: "invalid" }); // status 401 text of unauthorized
            }
        } catch (err) {
            done(err);
        }
    }));
    
    passport.use(new PassportJWT.Strategy({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret
    }, (payload: Payload, done) => {
        try {
            done(null, payload)
        } catch (error) {
            done(error)
        }
    }))
    app.use(passport.initialize())
}