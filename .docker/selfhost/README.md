# 识光 LumiBook 自托管部署（低配机器专用）

> 无需本地编译。GitHub Actions 云端构建好镜像后，本机只需 `docker pull` + `docker compose up`。
> 适合内存较小的机器（3~4GB 即可运行 server + PostgreSQL + Redis 三件套）。

## 1. 前置条件

- 安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)（自带 Compose 插件）
- Docker Desktop → Settings → Resources 分配 **至少 4GB** 内存

## 2. 获取部署文件

在任意目录执行（会自动下载本目录下的 compose 配置）：

```bash
git clone --depth 1 -b canary https://github.com/chen1336166753/LumiBook.git lumibook-deploy
cd lumibook-deploy/.docker/selfhost
```

## 3. 登录 GitHub 镜像仓库（GHCR）

镜像默认私有，首次拉取需要登录。生成一个 **只读** token：
<https://github.com/settings/personal-access-tokens> → Fine-grained token →
Repository access 选 `LumiBook` → Permissions → **Packages: Read**。

然后登录（用户名填 `chen1336166753`，密码粘贴 token）：

```bash
docker login ghcr.io -u chen1336166753
```

> 若提示 `unauthorized`：token 缺 `read:packages` 权限；也可以在仓库 Packages 页面把镜像设为 Public，之后免登录直接拉取。

## 4. 启动

```bash
cp config.json.example config.json
docker compose up -d
```

首次启动会自动执行数据库迁移（`affine_migration` 任务），等待日志出现：

```bash
docker compose logs -f affine
```

看到 `Listening on http://0.0.0.0:3010` 即启动完成。

## 5. 访问

浏览器打开 <http://localhost:3010>，注册的第一个账号即管理员。

## 6. 常用运维命令

```bash
docker compose logs -f            # 查看日志
docker compose ps                 # 查看状态
docker compose down               # 停止
docker compose down -v            # 停止并清空数据（危险）
docker compose pull && docker compose up -d   # 更新到最新镜像
```

数据默认存放在当前目录的 `./data` 下（PostgreSQL 数据与上传的文件）。
卸载时删除整个目录即可。

## 7. 端口与内存参考

| 服务 | 占用 | 说明 |
|---|---|---|
| affine server | ~300-500MB | Node 22 + NestJS，含前端静态资源 |
| postgres | ~150-250MB | pgvector:pg16，可改小 `shared_buffers` |
| redis | ~10MB | 缓存队列 |

3.8GB 内存可运行，磁盘建议预留 3GB 以上。
