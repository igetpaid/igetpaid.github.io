@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0"

echo ========================================
echo   igetpaid.ru — Building project
echo ========================================
echo.

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js (npm) not found.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [1/2] Installing dependencies (if needed)...
call npm install
if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

echo.
echo [2/2] Building project...
call npm run build
if errorlevel 1 (
    echo [ERROR] Build failed.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCESS! Build complete.
echo   Output folder: dist/
echo ========================================
echo.
echo What to upload to InfinityFree:
echo   1. Open dist/ folder
echo   2. Copy ALL files inside it
echo   3. Connect via FTP to your hosting
echo   4. Paste into htdocs/ folder
echo.
pause
