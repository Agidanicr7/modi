
import email
import re
from flask import Flask, render_template, request, redirect, url_for,jsonify,abort
# from flask.json import jsonify
from flask_sqlalchemy import SQLAlchemy
import sqlite3
from werkzeug.security  import generate_password_hash, check_password_hash
from  flask_login import UserMixin, LoginManager, login_required, login_user, logout_user,current_user
from werkzeug.security import generate_password_hash, check_password_hash
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
import os
#from flask_migrate import Migrate, MigrateCommand
#from flask_script import Manager
#from sys import argv

#from flask_mail import Mail
from random import randint
from datetime import datetime
#from flask_marshmallow import Marshmallow







#Position all of this after the db and app have been initialised


app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname((__file__)))
database = "app.db"
con = sqlite3.connect(os.path.join(basedir,database))
#mail = Mail(app)
app.config['SECRET_KEY'] = "jhkxhiuydu"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(basedir,database)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
# app.config['MAIL_SERVER'] = 'intexcoin.com'
# app.config['MAIL_PORT'] = 465
# app.config['MAIL_USERNAME'] = 'info@intexcoin.com'
# app.config['MAIL_SERVER'] = 'server148.web-hosting.com'

db = SQLAlchemy(app)

#migrate = Migrate(app, db,render_as_batch=True)
#manager = Manager(app)
#manager.add_command('db', MigrateCommand)




class Users(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    Firstname = db.Column(db.String(255))
    lastname = db.Column(db.String(255))
    email = db.Column(db.String(255), unique=True)
    phone = db.Column(db.Integer)
    dob = db.Column(db.Integer)
    sex = db.Column(db.String(255))
    house_address = db.Column(db.String(255))
    city =  db.Column(db.String(255))
    postal_code = db.Column(db.Integer)
    country = db.Column(db.String(255))
    state = db.Column(db.String(255))
    currency =  db.Column(db.String(255))
    national_id = db.Column(db.String(255),unique=True)
    employer_address =  db.Column(db.String(255))
    employ_type =  db.Column(db.String(255))
    salary = db.Column(db.Integer)
    name_kin =  db.Column(db.String(255))
    kin_work =  db.Column(db.String(255))
    password =  db.Column(db.String(500))
   
    account_type = db.Column(db.String(255))
    passport = db.Column(db.String(255))
    account_number = db.Column(db.String(255))
    Book_balance = db.Column(db.String(255),default=000)
    loan_limit = db.Column(db.String(255),default=000)
    card_limit = db.Column(db.String(255),default=000)
    active = db.Column(db.Boolean)
    # wire = db.relationship('wire', backref='users', lazy=True)
    # local = db.relationship('local', backref='users', lazy=True)
    # samebank = db.relationship('samebank', backref='users', lazy=True)
    # is_admin = db.Column(db.Boolean, default = False)
    

    def check_password(self, password):
        return check_password_hash(self.password, password)
    def set_password(self, password):
        self.password = generate_password_hash(password, method='sha256')

    def create(self, Firstname='',  email='', lastname='', phone='', dob='', sex='', house_address='', city='', postal_code='', country='', state='', currency='', national_id='',  employer_address='', employ_type='', salary='', name_kin='', kin_work='', password='', account_type='' ,  referID=''):
        self.Firstname	 = Firstname
        self.email	 = email
        self.lastname 	 = lastname
        self.account_type = account_type
        self.phone = phone
        self.dob = dob
        self.sex = sex
        self.house_address = house_address
        self.city = city
        self.postal_code = postal_code
        self.country = country
        self.state = state
        self.currency = currency
        self.national_id = national_id
        self.employer_address = employer_address
        self.employ_type = employ_type
        self.salary = salary
        self.name_kin = name_kin
        self.kin_work = kin_work
        self.referID = referID
        self.password= generate_password_hash(password, method='sha256')


    def save(self):
        db.session.add(self)
        db.session.commit()

    def commit(self):
        db.session.commit()

class Payments(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    paymentID = db.Column(db.String(500),unique=True)
    confirm = db.Column(db.Boolean,default=False)
    paymentwallet = db.Column(db.String(500))
    user = db.Column(db.Integer, db.ForeignKey(Users.id))

class Wire(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    Bank_name = db.Column(db.String(500))
    Ben_name = db.Column(db.String(255))
    Bank_account= db.Column(db.Integer)
    # Bank_email = db.Column(db.String(500))
    # reciver_country = db.Column(db.String(500))
    # timestamp = db.Column(db.String(255),default=datetime.now())
    swift = db.Column(db.String(255))
    Bank_amount = db.Column(db.Integer)
   
 

    def create(self, Bank_name='',  Bank_amount='', Ben_name='',  swift='', Bank_account=''):
        self.Bank_name	 = Bank_name,
        self.Bank_account	 = Bank_account,
        self.Ben_name	 = Ben_name,
        # self.Bank_email = Bank_email,
        # self.reciver_country = reciver_country,
        # self.timestamp = timestamp,
        self.swift = swift,
        self.Bank_amount = Bank_amount
        

    def save(self):
        db.session.add(self)
        db.session.commit()

    def commit(self):
        db.session.commit()



class Plan(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    plan = db.Column(db.String(255))
    plan_price = db.Column(db.String(255))
    plan_roi = db.Column(db.String(255))
    plan_rate = db.Column(db.String(255))
    isDanger = db.Column(db.Boolean,default=False)
    IsActive = db.Column(db.Boolean,default=False)
    isWarning = db.Column(db.Boolean,default=False)
    iSpricing = db.Column(db.Boolean,default=False)




class Subscription(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    paymentID = db.Column(db.String(500))
    confirm = db.Column(db.Boolean,default=False)
    users = db.Column(db.Integer)
    plan = db.Column(db.String(255))
    plan_price = db.Column(db.String(255))
    plan_roi = db.Column(db.String(255))
    plan_rate = db.Column(db.String(255))





class Transactions(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255))
    txtype = db.Column(db.String(255))
    cost = db.Column(db.String(255))
    timestamp = db.Column(db.String(255),default=datetime.now())
    user = db.Column(db.Integer, db.ForeignKey(Users.id))




class Settings(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    walletName = db.Column(db.String(255), unique=True)
    walletaddress = db.Column(db.String(255), unique=True)

class Market(db.Model):
    id       = db.Column(db.Integer, primary_key=True)
    coinname = db.Column(db.String(255), unique=True)
    types    =   db.Column(db.String(255))
class Demn(db.Model, UserMixin):
    id = db.Column(db.Integer,primary_key=True)
    emailx = db.Column(db.String(255))
    uname = db.Column(db.String(255))
    pword = db.Column(db.String(255))
def create(self,uname='', pword='', email=''):
    self.uname = uname
    self.pword = pword
    self.email = email
def save(self):
    db.session.add(self)
    db.session.commit()
def commit(self):
    db.session.commit()

class ModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated
    
    # def inaccessible_callback(self, name, **kwargs):
    #     # redirect to login page if user doesn't have access
    #     return redirect(url_for('login', next=request.url))

    
admin = Admin(app, name='administration', template_mode='bootstrap3')
admin.add_view(ModelView(Users, db.session))
admin.add_view(ModelView(Settings, db.session))
admin.add_view(ModelView(Subscription, db.session))
admin.add_view(ModelView(Transactions, db.session))
admin.add_view(ModelView(Plan, db.session))
admin.add_view(ModelView(Market,db.session))
admin.add_view(ModelView(Wire,db.session))




    



login_manager = LoginManager()
login_manager.login_view = "signin"
login_manager.init_app(app)
@login_manager.user_loader
def user_loader(user_id):
    return Users.query.get(user_id)

    

    







@app.route('/index')
def index():
    plans = Plan.query.all()
    activeusers = randint(576, 6899)
    return render_template('index.html',plans=plans,activeusers=activeusers)


@app.route('/login',methods=['GET','POST'])
def login():
    user = Users()
    if request.method == 'POST':
        username = request.form['usernames']
        password = request.form['passwords']
        user = Users.query.filter_by(username=username,is_admin=True).first()
       
        if user:
            if user.password == password:
                login_user(user)
                return redirect('admin')

                
                
            


    return render_template('login.html')
@app.route('/process',methods=['GET','POST'])

def process():
    auths = Users()
    if request.method == "POST":
        username = request.form['uname']
        password = request.form['pass']
        email = request.form['email']
        auths = Users(username=username,
             password=password,email=email,is_admin=True)
        db.session.add(auths)
        db.session.commit()
        return "welcome sign up completed"
    return render_template('register.html')
    
   


@app.route('/apply.html')
def apply():
    return render_template('apply.html')
@app.route('/transfer.html')
def modal():
    return render_template('transfer.html')
@app.route('/profile.html')
def profile():
    return render_template('profile.html')
@app.route('/modals.html')
def modals():
    return render_template('modal.html')
@app.route('/services.html')
def services():
    return render_template('services.html')
@app.route('/saving.html')
def saving():
    return render_template('saving.html')
# @app.route('/signin.html')
# def signin():
#     return render_template('signin.html')
# @app.route('/signup.html')
# def signup():
#     return render_template('signup.html')
@app.route('/personal.html')
def personal():
    return render_template('personal.html')
@app.route('/message.html')
def message():
    return render_template('message.html')
@app.route("/logd")
def logot():
    logout_user()
    return 'logout'


@app.route("/dashboard")
@login_required
def dashboard():
    siteSettings = Settings.query.all()
    userplan = Subscription.query.filter_by(users=current_user.id).all()
    txs = Transactions.query.filter_by(user=current_user.id).all()
    # plan = Plan.query.all()
    # total = current_user.profit + current_user.balance
    # markets = Market.query.all()
    return render_template('dash.html'
                                # siteSettings=siteSettings,
                                # userplan=userplan,
                                # txs=txs,
                                # plan=plan,
                                # total=total,
                                # markets=markets)
    )

@app.route("/withdraw",methods=['GET'])
def withdraw():
    if current_user.userwallet == None:
        return jsonify({'status':404,'msg':"You haven't set your withdrawal wallet, click wallet to set it and try again"})

    return jsonify({'status':200,'msg':"Your withdraw request has been sent, you will recieve your payment shortly, Thanks for investing with us"})

@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/call.html")
def call():
    return render_template("call.html")
    
@app.route("/contactus")
def contact():
    return "Comming soon"

@app.route("/message")
def account():
    return render_template("/message.html")

@app.route("/wire")
def babayaro():
    return render_template("/wire.html")
    

#@app.route('/profile', methods=['GET', 'POST'])
#@login_required
# def profile():
#     siteSettings = Settings.query.all()
#     return render_template('profile.html', siteSettings=siteSettings)




@app.route("/signin",methods=['GET','POST'])
def signin():
    users = Users()
    if request.method == "POST":
        data = request.json
        userBynational_id = users.query.filter_by(national_id=data['national_id']).first()
        # userByemail = users.query.filter_by(email=data['email']).first()
        mainUser = None
        #sir at this point i need help 
        #if current_user.is_admin == True:
            #return redirect('admin')
        if userBynational_id:
            mainUser = userBynational_id
        # if userByemail:
        #     mainUser = userByemail
        # if mainUser.active== True:
        #         return jsonify({"status":401,'msg':"your account has been deactivated"})
        if mainUser:
            if mainUser.check_password(data['password']):
                login_user(mainUser,remember=True,fresh=True)
                return jsonify({'status':200,'msg':'user authenticated'})
            return jsonify({"status":404,"msg":"Inavlid password provided!!!"})
        return jsonify({"status":404,"msg":"invalid email or username"})

    return render_template("signin.html")


@app.route("/signup",methods=['GET','POST'])
def signup():
    users = Users()
    if request.method == 'POST':
        data = request.json
        firstname = data['firstname']
        lastname = data['lastname']
        email = data['email']
        phone = data['phone']
        dob = data['dob']
        house_address = data['house_address']
        city = data['city']
        postal_code = data['postal_code']
        country = data['country']
        state = data['state']
        currency = data['currency']
        national_id = data['national_id']
        employer_address = data['employer_address']
        employ_type = data['employ_type']
        salary = data['salary']
        name_kin = data['name_kin']
        kin_work = data['kin_work']
        password = data['password']
     
        account_type = data['account_type']
        if users.query.filter_by(national_id=national_id).first():
            return jsonify({"status":404,"msg":"username already exist!!!"})
        if users.query.filter_by(email=email).first():
            return jsonify({"status":404,"msg":"email already exist!!!"})
        users.create(Firstname=firstname,
                            lastname = lastname,
                            email=email,
                            phone =phone,
                            dob = dob,
                            house_address = house_address,
                            city = city,
                            postal_code = postal_code,
                            country = country,
                            state = state,
                            currency = currency,
                            national_id = national_id,
                            employer_address = employer_address,
                            employ_type = employ_type,
                            salary = salary,
                            name_kin = name_kin,
                            kin_work = kin_work,
                            password= password,
                           
                            account_type= account_type,
                           
                            referID=randint(456463276,7656562565))

        users.save()

        login_user(users)
        # return redirect(url_for("dashboard"))
        return jsonify({'status':200,"msg":"registration compelete!!!"})

    return render_template("signup.html")
       

@app.route("/wire",methods=['GET','POST'])
def international():
    wire = Wire()
    if request.method == 'POST':
        data = request.json
        bank_name = data['bank_name']
        Bank_account = data['bank_account']
        Ben_name = data['ben_name']
        # bank_email = data['bank_email']
        # Reciver_code = data['reciver_code']
        # timestamps = data['timestamps']
        swifts = data['swifts']
        bank_amount = data['bank_amounts']
        # if wire.query.filter_by(Bank_amount = bank_amount).first():
        #         return jsonify({"status":404,"msg":"Fund not sufficient"})
        
        wire.create(Bank_name=bank_name,
                            Bank_account= Bank_account,
                            # Bank_email= bank_email,
                            Ben_name= Ben_name,
                            # reciver_country = Reciver_code,
                            # timestamp = timestamps,
                            swift = swifts,
                            Bank_amount= bank_amount)
        # wire.save()
        db.session.add(wire)
        db.session.commit()

        
        return jsonify({'status':200,"msg":"registration compelete!!!"})

    return render_template("wire.html")
    
        


# @app.route("/subscribe",methods=['POST'])
# @login_required
# def subscribe():
#     data = request.json
#     print(data)
#     userplan = Plan.query.filter_by(plan=data['plan']).first()
#     new_subscription = Subscription(
#             users=current_user.id,
#             plan = userplan.plan,
#             plan_price = userplan.plan_price,
#             plan_roi = userplan.plan_roi,
#             plan_rate = userplan.plan_rate)
#     if current_user.balance < int(userplan.plan_price):
#         return jsonify({'status':200,'msg':'insufficient balance.'})


#     current_user.balance -= int(userplan.plan_price)
#     new_transaction = Transactions(cost=userplan.plan_price,
#                                         user=current_user.id,
#                                         description='investment of '+str(userplan.plan_price),
#                                         txtype='investment')
#     db.session.add(new_transaction)
#     db.session.add(new_subscription)
#     db.session.commit()
#     return jsonify({'status':200,'msg':'Your plan will be updated on your dashbaord as soon as we confirm your payment on the network, Thanks for investing with us.'})

# @app.route('/payments',methods=['POST'])
# def makepayment():
#     data = request.json
#     if Payments.query.filter_by(paymentID=data['paymentID']).first():
#         return jsonify({'status':404,'msg':'payment already exist'})
#     new_payment = Payments(
#         paymentID=data['paymentID'],
#         user = current_user.id,
#         paymentwallet=data['walletid'])
#     new_transaction = Transactions(description='Account funding',
#                                     txtype='Payment Deposit',
#                                     user=current_user.id)
#     db.session.add(new_transaction)
#     db.session.add(new_payment)
#     db.session.commit()
#     return jsonify({'status':200,'msg':'payement submmited'})


# @app.route('/addwallet',methods=['POST'])
# def addwallet():
#     da = request.json
#     print(da)    
#     current_user.userwallet = str(da['wallet'])
#     db.session.commit()
#     return jsonify({'status':200,'msg':'wallet added to your account'})

# @app.route("/updatepassword",methods=['POST'])
# def updatepassword():
#     data = request.json
#     if check_password_hash(current_user.password,data['currentpassword']):
#         current_user.password = data['newpassword']
#         Users.commit()
#         return jsonify({'status':200,'msg':'password reset complete'})
#     return jsonify({'status':404,'msg':'password not match'})
# @app.route("/verify",methods=['POST'])
# def verify():
#     request.files['file']
#     current_user.verified = True
#     db.session.commit()
#     return redirect(url_for('dashboard'))



# @app.route('/markrttype/<types>')
# def market_type(types):
#     print(len(types))
#     mk = Market.query.filter_by(types=types).all()
#     coin = []
#     for i in mk:
#         coin.append(i.coinname)

#     return jsonify(coin)




@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for("signin"))

@app.route("/db")
def database():
    db.drop_all()
    db.create_all()
    return "Hello done!!!"
    

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8001, debug=True)
# if __name__ == '__main__':
#     manager.run()
#     app.run(host='127.0.0.1', port=8050, debug=True)
 
