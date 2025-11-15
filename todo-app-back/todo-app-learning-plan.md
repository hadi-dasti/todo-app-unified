کارهایی که باید انجام بدی:

NestJS و TypeORM (Backend):
یه entity جدید برای User بساز (با فیلدهایی مثل id, username, email, password).
یه relation بین User و Todo بساز (مثلاً هر todo متعلق به یه user باشه، با foreign key).
یه module جدید برای User بساز (شامل controller, service, repository) که CRUD برای user داشته باشه (مثل register, login, get user profile).
از TypeORM برای queryهای پیچیده‌تر استفاده کن (مثل پیدا کردن همه todos یه user با join).

PostgreSQL و SQL:
توی دیتابیس، table برای User بساز و relation با Todo رو تنظیم کن.
یه query خام (raw query) بنویس که تعداد todos هر user رو بشمره (مثل group by).
یه index روی فیلد email توی table user بساز تا search سریع‌تر بشه.
یه transaction پیاده کن که یه user جدید بسازه و همزمان یه todo براش ثبت کنه.

JS/ES6:
توی کد backend، از ES6 features مثل destructuring, arrow functions, async/await و spread operator استفاده کن (مثلاً توی serviceها یا controllerها).
یه utility function بنویس (مثل formatTodos) که با map/filter/reduce خروجی API رو بهینه کنه (مثلاً فقط id و title برگردونه).
همه importها رو به ES6 style نگه دار (بدون require).

API نویسی:
APIهای جدید برای user بساز (مثل POST /users/register, POST /users/login, GET /users/:id/todos).
validation برای ورودی‌ها اضافه کن (مثل با class-validator برای DTOها).
یه middleware ساده برای authentication بساز (مثلاً چک کن user معتبره یا نه، حتی fake).
APIها رو توی Postman یا Swagger تست و document کن.

Git و GitHub:
یه branch جدید بساز (مثل feature/user-management).
تغییرات رو به صورت commitهای کوچک و معنادار push کن (مثل git commit -m "Add user entity and relation").
یه pull request توی GitHub بساز و خودت review کن (چک کن کدت تمیزه).
README پروژه‌ت رو آپدیت کن و توضیح بده پروژه چی کار می‌کنه و چطور run بشه.

React و Frontend:
توی فولدر todo-app-front یه پروژه React با create-react-app یا vite راه‌اندازی کن.
یه component برای لیست todos بساز که از backend با fetch یا axios داده بگیره و نشون بده.
یه فرم برای ثبت user جدید بساز (مثل register) و به API backend وصلش کن.
با useState و useEffect برای مدیریت state و fetch داده کار کن.
یه صفحه ساده با react-router بساز (مثل /todos و /register).

بالا آوردن پروژه:
یه فایل .env بساز و متغیرهایی مثل DB connection و port رو توش بذار.
توی package.json اسکریپت برای run کردن backend و frontend با یه دستور (مثل concurrently) اضافه کن.
CORS رو توی NestJS تنظیم کن تا frontend بتونه به backend وصل بشه.
پروژه رو local تست کن (backend توی localhost:3000 و frontend توی localhost:5173).

حل مسئله و سرعت:
قبل از هر بخش، روی کاغذ pseudocode بنویس (مثل چطور relation user-todo پیاده می‌شه).
اگه خطایی گرفتی (مثل CORS یا DB error)، با console.log و debugger توی VSCode troubleshoot کن.
از shortcutهای کیبورد (مثل Ctrl+Shift+P توی VSCode یا Alt+Tab توی ویندوز) استفاده کن تا سریع‌تر کد بزنی.
هر روز ۱۵ دقیقه توی typing.com تمرین تایپ کن تا سرعتت بره بالا.


زمان پیشنهادی: ۱-۲ هفته (روزی ۱-۲ ساعت). اگه بخوای سریع‌تر یا آهسته‌تر بری، بگو تا تنظیم کنم.
چالش حل مسئله:

فکر کن: اگه user بخواد فقط todos خودشو ببینه، API و frontend چطور باید کار کنه؟
اگه DB connection قطع بشه، چطور error رو handle می‌کنی؟
چطور می‌تونی API رو secureتر کنی (مثلاً با JWT)؟

خروجی مورد انتظار:

backendت باید API برای user و todo داشته باشه، با relation بینشون.
frontendت باید یه لیست ساده todos و فرم register نشون بده.
پروژه باید local run بشه و backend و frontend به هم وصل باشن.
کدت باید تمیز و با ES6 نوشته شده باشه، توی GitHub با commitهای مرتب.