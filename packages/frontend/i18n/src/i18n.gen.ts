// @ts-nocheck
/* eslint-disable */
import { createElement, useMemo, type ComponentType, type JSX } from "react";
import { useTranslation, Trans, type TransProps } from "react-i18next";
type TypedTransProps<Value, Components, Context extends string | undefined = undefined> = Omit<TransProps<string, never, never, Context>, "values" | "ns" | "i18nKey"> & ({} extends Value ? {} : {
    values: Value;
}) & {
    components: Components;
};
function createProxy(initValue: (key: string) => any) {
    function define(key: string) {
        const value = initValue(key);
        Object.defineProperty(container, key, { value, configurable: true });
        return value;
    }
    const container = {
        __proto__: new Proxy({ __proto__: null }, {
            get(_, key) {
                if (typeof key === "symbol")
                    return undefined;
                return define(key);
            },
        }),
    };
    return new Proxy(container, {
        getPrototypeOf: () => null,
        setPrototypeOf: (_, v) => v === null,
        getOwnPropertyDescriptor: (_, key) => {
            if (typeof key === "symbol")
                return undefined;
            if (!(key in container))
                define(key);
            return Object.getOwnPropertyDescriptor(container, key);
        },
    });
}
export function useLumiBookI18N(): {
    /**
      * `返回我的内容`
      */
    ["404.back"](): string;
    /**
      * `抱歉，您没有访问权限或该内容不存在...`
      */
    ["404.hint"](): string;
    /**
      * `登录另一个帐户`
      */
    ["404.signOut"](): string;
    /**
      * `识光 Cloud`
      */
    ["\u8BC6\u5149 Cloud"](): string;
    /**
      * `全部文档`
      */
    ["All pages"](): string;
    /**
      * `应用版本`
      */
    ["App Version"](): string;
    /**
      * `可供离线使用`
      */
    ["Available Offline"](): string;
    /**
      * `粗体`
      */
    Bold(): string;
    /**
      * `取消`
      */
    Cancel(): string;
    /**
      * `点击以更换照片`
      */
    ["Click to replace photo"](): string;
    /**
      * `精选`
      */
    Collections(): string;
    /**
      * `完成`
      */
    Complete(): string;
    /**
      * `确认`
      */
    Confirm(): string;
    /**
      * `继续`
      */
    Continue(): string;
    /**
      * `转换为`
      */
    ["Convert to "](): string;
    /**
      * `复制链接到剪贴板`
      */
    ["Copied link to clipboard"](): string;
    /**
      * `复制到剪贴板`
      */
    ["Copied to clipboard"](): string;
    /**
      * `复制`
      */
    Copy(): string;
    /**
      * `创建`
      */
    Create(): string;
    /**
      * `创建时间`
      */
    Created(): string;
    /**
      * `自定义`
      */
    Customize(): string;
    /**
      * `颜色`
      */
    Colors(): string;
    /**
      * `数据库文件已加载`
      */
    DB_FILE_ALREADY_LOADED(): string;
    /**
      * `无效的数据库文件`
      */
    DB_FILE_INVALID(): string;
    /**
      * `数据库文件迁移失败`
      */
    DB_FILE_MIGRATION_FAILED(): string;
    /**
      * `数据库文件路径无效`
      */
    DB_FILE_PATH_INVALID(): string;
    /**
      * `日期`
      */
    Date(): string;
    /**
      * `删除`
      */
    Delete(): string;
    /**
      * `删除`
      */
    Deleted(): string;
    /**
      * `禁用`
      */
    Disable(): string;
    /**
      * `禁用公开分享`
      */
    ["Disable Public Sharing"](): string;
    /**
      * `禁用快照`
      */
    ["Disable Snapshot"](): string;
    /**
      * `分割线`
      */
    Divider(): string;
    /**
      * `无界`
      */
    Edgeless(): string;
    /**
      * `编辑`
      */
    Edit(): string;
    /**
      * `编辑器版本`
      */
    ["Editor Version"](): string;
    /**
      * `启用`
      */
    Enable(): string;
    /**
      * `启用 识光 同步`
      */
    ["Enable \u8BC6\u5149 Cloud"](): string;
    /**
      * `启用后，此工作区会通过 识光 同步进行备份和同步。`
      */
    ["Enable \u8BC6\u5149 Cloud Description"](): string;
    /**
      * `以下功能需要 识光 同步。网页版工作区保存在当前浏览器中，磁盘空间不足时可能会被浏览器自动移除。启用 识光 同步后，可让这个工作区更稳妥，并在多设备使用。`
      */
    ["Enable cloud hint"](): string;
    /**
      * `全量备份`
      */
    ["Full Backup"](): string;
    /**
      * `导出完整的工作区备份`
      */
    ["Full Backup Description"](): string;
    /**
      * `同步所有云数据并导出完整的工作区备份`
      */
    ["Full Backup Hint"](): string;
    /**
      * `快速导出`
      */
    ["Quick Export"](): string;
    /**
      * `跳过云同步并快速导出当前数据（某些附件或文档可能会丢失）`
      */
    ["Quick Export Description"](): string;
    /**
      * `导出失败`
      */
    ["Export failed"](): string;
    /**
      * `导出成功`
      */
    ["Export success"](): string;
    /**
      * `导出为 HTML`
      */
    ["Export to HTML"](): string;
    /**
      * `导出为 Markdown`
      */
    ["Export to Markdown"](): string;
    /**
      * `导出为 PNG`
      */
    ["Export to PNG"](): string;
    /**
      * `文件已存在`
      */
    FILE_ALREADY_EXISTS(): string;
    /**
      * `收藏`
      */
    Favorite(): string;
    /**
      * `已收藏`
      */
    Favorited(): string;
    /**
      * `收藏夹`
      */
    Favorites(): string;
    /**
      * `反馈`
      */
    Feedback(): string;
    /**
      * `找到 0 个结果`
      */
    ["Find 0 result"](): string;
    /**
      * `返回`
      */
    ["Go Back"](): string;
    /**
      * `前进`
      */
    ["Go Forward"](): string;
    /**
      * `知道了`
      */
    ["Got it"](): string;
    /**
      * `标题 {{number}}`
      */
    Heading(options: {
        readonly number: string;
    }): string;
    /**
      * `图像`
      */
    Image(): string;
    /**
      * `导入`
      */
    Import(): string;
    /**
      * `信息`
      */
    Info(): string;
    /**
      * `邀请已发送`
      */
    ["Invitation sent"](): string;
    /**
      * `已通过电子邮件通知受邀成员加入此工作区。`
      */
    ["Invitation sent hint"](): string;
    /**
      * `邀请`
      */
    Invite(): string;
    /**
      * `邀请成员`
      */
    ["Invite Members"](): string;
    /**
      * `受邀成员将在当前工作空间中与您协作`
      */
    ["Invite Members Message"](): string;
    /**
      * `团队席位不足`
      */
    ["insufficient-team-seat"](): string;
    /**
      * `加入的工作区`
      */
    ["Joined Workspace"](): string;
    /**
      * `退出`
      */
    Leave(): string;
    /**
      * `超链接（选定文本）`
      */
    Link(): string;
    /**
      * `加载中...`
      */
    Loading(): string;
    /**
      * `本地`
      */
    Local(): string;
    /**
      * `成员`
      */
    Member(): string;
    /**
      * `成员`
      */
    Members(): string;
    /**
      * `在这里管理成员，通过电子邮件邀请新成员。`
      */
    ["Members hint"](): string;
    /**
      * `新建文档`
      */
    ["New Page"](): string;
    /**
      * `所有者`
      */
    Owner(): string;
    /**
      * `页面`
      */
    Page(): string;
    /**
      * `笔`
      */
    Pen(): string;
    /**
      * `待定`
      */
    Pending(): string;
    /**
      * `协作者`
      */
    Collaborator(): string;
    /**
      * `正在审核`
      */
    ["Under-Review"](): string;
    /**
      * `席位不足`
      */
    ["Need-More-Seats"](): string;
    /**
      * `分配名额`
      */
    ["Allocating Seat"](): string;
    /**
      * `管理员`
      */
    Admin(): string;
    /**
      * `发布`
      */
    Publish(): string;
    /**
      * `公开到互联网`
      */
    ["Published to Web"](): string;
    /**
      * `快速搜索`
      */
    ["Quick Search"](): string;
    /**
      * `快速搜索`
      */
    ["Quick search"](): string;
    /**
      * `最近`
      */
    Recent(): string;
    /**
      * `从工作区移除`
      */
    ["Remove from workspace"](): string;
    /**
      * `移除照片`
      */
    ["Remove photo"](): string;
    /**
      * `移除特殊筛选`
      */
    ["Remove special filter"](): string;
    /**
      * `成功移除`
      */
    ["Removed successfully"](): string;
    /**
      * `重命名`
      */
    Rename(): string;
    /**
      * `重试`
      */
    Retry(): string;
    /**
      * `保存`
      */
    Save(): string;
    /**
      * `选择`
      */
    Select(): string;
    /**
      * `登录 识光`
      */
    ["Sign in"](): string;
    /**
      * `登录并启用`
      */
    ["Sign in and Enable"](): string;
    /**
      * `退出 识光`
      */
    ["Sign out"](): string;
    /**
      * `快照`
      */
    Snapshot(): string;
    /**
      * `储存`
      */
    Storage(): string;
    /**
      * `储存与导出`
      */
    ["Storage and Export"](): string;
    /**
      * `成功删除`
      */
    ["Successfully deleted"](): string;
    /**
      * `加入成功！`
      */
    ["Successfully joined!"](): string;
    /**
      * `切换`
      */
    Switch(): string;
    /**
      * `切换视图`
      */
    switchView(): string;
    /**
      * `同步`
      */
    Sync(): string;
    /**
      * `标签`
      */
    Tags(): string;
    /**
      * `文本`
      */
    Text(): string;
    /**
      * `主题`
      */
    Theme(): string;
    /**
      * `标题`
      */
    Title(): string;
    /**
      * `垃圾箱`
      */
    Trash(): string;
    /**
      * `未知错误`
      */
    UNKNOWN_ERROR(): string;
    /**
      * `撤销`
      */
    Undo(): string;
    /**
      * `取消固定`
      */
    Unpin(): string;
    /**
      * `未命名`
      */
    Untitled(): string;
    /**
      * `成功更新工作区名称`
      */
    ["Update workspace name success"](): string;
    /**
      * `更新时间`
      */
    Updated(): string;
    /**
      * `上传`
      */
    Upload(): string;
    /**
      * `用户`
      */
    Users(): string;
    /**
      * `版本`
      */
    Version(): string;
    /**
      * `访问工作区`
      */
    ["Visit Workspace"](): string;
    /**
      * `工作区名称`
      */
    ["Workspace Name"](): string;
    /**
      * `工作区所有者`
      */
    ["Workspace Owner"](): string;
    /**
      * `工作区配置文件`
      */
    ["Workspace Profile"](): string;
    /**
      * `工作区设置`
      */
    ["Workspace Settings"](): string;
    /**
      * `{{name}} 的设置`
      */
    ["Workspace Settings with name"](options: {
        readonly name: string;
    }): string;
    /**
      * `{{name}} 已保存在本地`
      */
    ["Workspace saved locally"](options: {
        readonly name: string;
    }): string;
    /**
      * `放大`
      */
    ["Zoom in"](): string;
    /**
      * `缩小`
      */
    ["Zoom out"](): string;
    /**
      * `未知用户`
      */
    ["Unknown User"](): string;
    /**
      * `删除用户`
      */
    ["Deleted User"](): string;
    /**
      * `全部`
      */
    all(): string;
    /**
      * `当前`
      */
    current(): string;
    /**
      * `创建于 {{time}}`
      */
    ["created at"](options: {
        readonly time: string;
    }): string;
    /**
      * `最后更新于 {{time}}`
      */
    ["updated at"](options: {
        readonly time: string;
    }): string;
    /**
      * `定期自动检查更新。`
      */
    ["com.affine.aboutLumiBook.autoCheckUpdate.description"](): string;
    /**
      * `自动检查更新`
      */
    ["com.affine.aboutLumiBook.autoCheckUpdate.title"](): string;
    /**
      * `自动下载更新（到此设备）。`
      */
    ["com.affine.aboutLumiBook.autoDownloadUpdate.description"](): string;
    /**
      * `自动下载更新`
      */
    ["com.affine.aboutLumiBook.autoDownloadUpdate.title"](): string;
    /**
      * `查看 识光 更新日志。`
      */
    ["com.affine.aboutLumiBook.changelog.description"](): string;
    /**
      * `发现新动态`
      */
    ["com.affine.aboutLumiBook.changelog.title"](): string;
    /**
      * `检查更新`
      */
    ["com.affine.aboutLumiBook.checkUpdate.button.check"](): string;
    /**
      * `下载更新`
      */
    ["com.affine.aboutLumiBook.checkUpdate.button.download"](): string;
    /**
      * `重新启动以安装更新`
      */
    ["com.affine.aboutLumiBook.checkUpdate.button.restart"](): string;
    /**
      * `重试`
      */
    ["com.affine.aboutLumiBook.checkUpdate.button.retry"](): string;
    /**
      * `新版本已准备就绪`
      */
    ["com.affine.aboutLumiBook.checkUpdate.description"](): string;
    /**
      * `手动检查更新`
      */
    ["com.affine.aboutLumiBook.checkUpdate.subtitle.check"](): string;
    /**
      * `检查更新中...`
      */
    ["com.affine.aboutLumiBook.checkUpdate.subtitle.checking"](): string;
    /**
      * `正在下载最新版本...`
      */
    ["com.affine.aboutLumiBook.checkUpdate.subtitle.downloading"](): string;
    /**
      * `无法连接服务器。`
      */
    ["com.affine.aboutLumiBook.checkUpdate.subtitle.error"](): string;
    /**
      * `您已获得最新版本的 识光。`
      */
    ["com.affine.aboutLumiBook.checkUpdate.subtitle.latest"](): string;
    /**
      * `重新启动以应用更新。`
      */
    ["com.affine.aboutLumiBook.checkUpdate.subtitle.restart"](): string;
    /**
      * `有可用的更新（{{version}}）`
      */
    ["com.affine.aboutLumiBook.checkUpdate.subtitle.update-available"](options: {
        readonly version: string;
    }): string;
    /**
      * `检查更新`
      */
    ["com.affine.aboutLumiBook.checkUpdate.title"](): string;
    /**
      * `社区`
      */
    ["com.affine.aboutLumiBook.community.title"](): string;
    /**
      * `识光 社区`
      */
    ["com.affine.aboutLumiBook.contact.community"](): string;
    /**
      * `联系我们`
      */
    ["com.affine.aboutLumiBook.contact.title"](): string;
    /**
      * `官网`
      */
    ["com.affine.aboutLumiBook.contact.website"](): string;
    /**
      * `隐私`
      */
    ["com.affine.aboutLumiBook.legal.privacy"](): string;
    /**
      * `法律信息`
      */
    ["com.affine.aboutLumiBook.legal.title"](): string;
    /**
      * `使用条款`
      */
    ["com.affine.aboutLumiBook.legal.tos"](): string;
    /**
      * `关于 识光 的资讯`
      */
    ["com.affine.aboutLumiBook.subtitle"](): string;
    /**
      * `关于 识光`
      */
    ["com.affine.aboutLumiBook.title"](): string;
    /**
      * `应用版本`
      */
    ["com.affine.aboutLumiBook.version.app"](): string;
    /**
      * `编辑器版本`
      */
    ["com.affine.aboutLumiBook.version.editor.title"](): string;
    /**
      * `版本`
      */
    ["com.affine.aboutLumiBook.version.title"](): string;
    /**
      * `开始使用`
      */
    ["com.affine.ai-onboarding.edgeless.get-started"](): string;
    /**
      * `让您的思维更开阔，创新更迅速，工作更效率，节省每个项目时间。`
      */
    ["com.affine.ai-onboarding.edgeless.message"](): string;
    /**
      * `升级为无限制使用`
      */
    ["com.affine.ai-onboarding.edgeless.purchase"](): string;
    /**
      * `右键拖选内容使用 识光 AI`
      */
    ["com.affine.ai-onboarding.edgeless.title"](): string;
    /**
      * `让您的思维更开阔，创新更迅速，工作更效率，节省每个项目时间。`
      */
    ["com.affine.ai-onboarding.general.1.description"](): string;
    /**
      * `邂逅 识光 AI`
      */
    ["com.affine.ai-onboarding.general.1.title"](): string;
    /**
      * `即刻回答您的所有疑问。`
      */
    ["com.affine.ai-onboarding.general.2.description"](): string;
    /**
      * `与 识光 AI 聊天`
      */
    ["com.affine.ai-onboarding.general.2.title"](): string;
    /**
      * `几秒内即可获得完美的语气、拼写和摘要。`
      */
    ["com.affine.ai-onboarding.general.3.description"](): string;
    /**
      * `使用 识光 AI 内联编辑`
      */
    ["com.affine.ai-onboarding.general.3.title"](): string;
    /**
      * `从构思到实现，将想法变为现实。`
      */
    ["com.affine.ai-onboarding.general.4.description"](): string;
    /**
      * `使用 识光 AI 使其成为现实`
      */
    ["com.affine.ai-onboarding.general.4.title"](): string;
    /**
      * `识光 AI 已蓄势待发`
      */
    ["com.affine.ai-onboarding.general.5.title"](): string;
    /**
      * `开始使用`
      */
    ["com.affine.ai-onboarding.general.get-started"](): string;
    /**
      * `下一步`
      */
    ["com.affine.ai-onboarding.general.next"](): string;
    /**
      * `返回`
      */
    ["com.affine.ai-onboarding.general.prev"](): string;
    /**
      * `获取无限制的使用`
      */
    ["com.affine.ai-onboarding.general.purchase"](): string;
    /**
      * `稍后提醒我`
      */
    ["com.affine.ai-onboarding.general.skip"](): string;
    /**
      * `免费试用`
      */
    ["com.affine.ai-onboarding.general.try-for-free"](): string;
    /**
      * `忽略`
      */
    ["com.affine.ai-onboarding.local.action-dismiss"](): string;
    /**
      * `开始使用`
      */
    ["com.affine.ai-onboarding.local.action-get-started"](): string;
    /**
      * `了解更多`
      */
    ["com.affine.ai-onboarding.local.action-learn-more"](): string;
    /**
      * `让您的思维更开阔，创新更迅速，工作更效率，节省每个项目时间。`
      */
    ["com.affine.ai-onboarding.local.message"](): string;
    /**
      * `邂逅 识光 AI`
      */
    ["com.affine.ai-onboarding.local.title"](): string;
    /**
      * `新建`
      */
    ["com.affine.ai-scroll-tip.tag"](): string;
    /**
      * `邂逅 识光 AI`
      */
    ["com.affine.ai-scroll-tip.title"](): string;
    /**
      * `查看`
      */
    ["com.affine.ai-scroll-tip.view"](): string;
    /**
      * `请切换到无界模式`
      */
    ["com.affine.ai.action.edgeless-only.dialog-title"](): string;
    /**
      * `取消`
      */
    ["com.affine.ai.login-required.dialog-cancel"](): string;
    /**
      * `登录`
      */
    ["com.affine.ai.login-required.dialog-confirm"](): string;
    /**
      * `要使用 识光 AI，请先登录您的 识光 Cloud 帐户。`
      */
    ["com.affine.ai.login-required.dialog-content"](): string;
    /**
      * `登录以继续`
      */
    ["com.affine.ai.login-required.dialog-title"](): string;
    /**
      * `插入模板失败，请重试。`
      */
    ["com.affine.ai.template-insert.failed"](): string;
    /**
      * `识光 AI`
      */
    ["com.affine.ai.chat-panel.title"](): string;
    /**
      * `识光 AI 正在加载历史记录...`
      */
    ["com.affine.ai.chat-panel.loading-history"](): string;
    /**
      * `嵌入 {{done}}/{{total}}`
      */
    ["com.affine.ai.chat-panel.embedding-progress"](options: Readonly<{
        done: string;
        total: string;
    }>): string;
    /**
      * `本地工作区暂不支持附件或引用。`
      */
    ["com.affine.ai.chat-panel.local-workspace-context-unavailable"](): string;
    /**
      * `正在读取画布`
      */
    ["com.affine.ai.chat-panel.tool.canvas.reading"](): string;
    /**
      * `已读取“{{title}}”的画布`
      */
    ["com.affine.ai.chat-panel.tool.canvas.read"](options: {
        readonly title: string;
    }): string;
    /**
      * `已读取画布`
      */
    ["com.affine.ai.chat-panel.tool.canvas.read-untitled"](): string;
    /**
      * `画布读取失败`
      */
    ["com.affine.ai.chat-panel.tool.canvas.failed"](): string;
    /**
      * `画布内容`
      */
    ["com.affine.ai.chat-panel.tool.canvas.content"](): string;
    /**
      * `当前文档`
      */
    ["com.affine.ai.chat-panel.tool.live.current-document"](): string;
    /**
      * `正在检查编辑器状态`
      */
    ["com.affine.ai.chat-panel.tool.live.state-checking"](): string;
    /**
      * `已检查编辑器状态`
      */
    ["com.affine.ai.chat-panel.tool.live.state-checked"](): string;
    /**
      * `正在读取所选内容`
      */
    ["com.affine.ai.chat-panel.tool.live.selection-reading"](): string;
    /**
      * `已读取所选内容`
      */
    ["com.affine.ai.chat-panel.tool.live.selection-read"](): string;
    /**
      * `正在读取编辑器内容`
      */
    ["com.affine.ai.chat-panel.tool.live.content-reading"](): string;
    /**
      * `已读取编辑器内容`
      */
    ["com.affine.ai.chat-panel.tool.live.content-read"](): string;
    /**
      * `正在读取「{{title}}」的大纲`
      */
    ["com.affine.ai.chat-panel.tool.live.outline-reading"](options: {
        readonly title: string;
    }): string;
    /**
      * `已读取「{{title}}」的大纲`
      */
    ["com.affine.ai.chat-panel.tool.live.outline-read"](options: {
        readonly title: string;
    }): string;
    /**
      * `正在读取「{{title}}」的画布`
      */
    ["com.affine.ai.chat-panel.tool.live.canvas-reading"](options: {
        readonly title: string;
    }): string;
    /**
      * `已读取「{{title}}」的画布`
      */
    ["com.affine.ai.chat-panel.tool.live.canvas-read"](options: {
        readonly title: string;
    }): string;
    /**
      * `当前编辑器模式下不可用此视图`
      */
    ["com.affine.ai.chat-panel.tool.live.view-unavailable"](): string;
    /**
      * `编辑器实时读取失败`
      */
    ["com.affine.ai.chat-panel.tool.live.failed"](): string;
    /**
      * `{{mode}}模式`
      */
    ["com.affine.ai.chat-panel.tool.live.mode"](options: {
        readonly mode: string;
    }): string;
    /**
      * `{{count}} 个内容块`
      */
    ["com.affine.ai.chat-panel.tool.live.blocks"](options: {
        readonly count: string;
    }): string;
    /**
      * `{{count}} 个元素`
      */
    ["com.affine.ai.chat-panel.tool.live.elements"](options: {
        readonly count: string;
    }): string;
    /**
      * `文档`
      */
    ["com.affine.ai.chat-panel.scope.document"](): string;
    /**
      * `标签`
      */
    ["com.affine.ai.chat-panel.scope.tag"](): string;
    /**
      * `合集`
      */
    ["com.affine.ai.chat-panel.scope.collection"](): string;
    /**
      * `收藏`
      */
    ["com.affine.ai.chat-panel.scope.favorite"](): string;
    /**
      * `附件`
      */
    ["com.affine.ai.chat-panel.scope.artifact"](): string;
    /**
      * `{{count}} 个来源`
      */
    ["com.affine.ai.chat-panel.scope.sources"](options: {
        readonly count: string;
    }): string;
    /**
      * `你所选的来源还在处理中，请稍后重试。`
      */
    ["com.affine.ai.error.selectedSourcesProcessing"](): string;
    /**
      * `部分所选来源处理失败。请重试，若仍失败可移除后重新发送。`
      */
    ["com.affine.ai.error.selectedSourcesFailed"](): string;
    /**
      * `有一个或多个来源不可用。请检查来源或工作区的 AI 索引设置后重试。`
      */
    ["com.affine.ai.error.selectedSourcesUnavailable"](): string;
    /**
      * `所选来源数量或内容过多，请减少来源后重新发送。`
      */
    ["com.affine.ai.error.selectedSourcesLimitExceeded"](): string;
    /**
      * `重试`
      */
    ["com.affine.ai.error.retry"](): string;
    /**
      * `正在处理… · {{count}} 个操作`
      */
    ["com.affine.ai.chat-panel.tool-group.running"](options: {
        readonly count: string;
    }): string;
    /**
      * `已完成 {{count}} 个操作`
      */
    ["com.affine.ai.chat-panel.tool-group.completed"](options: {
        readonly count: string;
    }): string;
    /**
      * `已完成 {{count}} 个操作 · {{failed}} 个失败`
      */
    ["com.affine.ai.chat-panel.tool-group.failed"](options: Readonly<{
        count: string;
        failed: string;
    }>): string;
    /**
      * `删除此历史记录？`
      */
    ["com.affine.ai.chat-panel.session.delete.confirm.title"](): string;
    /**
      * `确定要删除这段 AI 对话历史记录吗？删除后无法恢复。`
      */
    ["com.affine.ai.chat-panel.session.delete.confirm.message"](): string;
    /**
      * `已删除历史记录`
      */
    ["com.affine.ai.chat-panel.session.delete.toast.success"](): string;
    /**
      * `删除历史记录失败`
      */
    ["com.affine.ai.chat-panel.session.delete.toast.failed"](): string;
    /**
      * `所有文档`
      */
    ["com.affine.all-pages.header"](): string;
    /**
      * `了解更多`
      */
    ["com.affine.app-sidebar.learn-more"](): string;
    /**
      * `给我们点亮星标`
      */
    ["com.affine.app-sidebar.star-us"](): string;
    /**
      * `下载更新`
      */
    ["com.affine.appUpdater.downloadUpdate"](): string;
    /**
      * `下载中`
      */
    ["com.affine.appUpdater.downloading"](): string;
    /**
      * `重新启动以安装更新`
      */
    ["com.affine.appUpdater.installUpdate"](): string;
    /**
      * `打开下载页面`
      */
    ["com.affine.appUpdater.openDownloadPage"](): string;
    /**
      * `有可用的更新`
      */
    ["com.affine.appUpdater.updateAvailable"](): string;
    /**
      * `发现新动态！`
      */
    ["com.affine.appUpdater.whatsNew"](): string;
    /**
      * `自定义客户端外观。`
      */
    ["com.affine.appearanceSettings.clientBorder.description"](): string;
    /**
      * `客户端边框样式`
      */
    ["com.affine.appearanceSettings.clientBorder.title"](): string;
    /**
      * `选择您的配色方案`
      */
    ["com.affine.appearanceSettings.color.description"](): string;
    /**
      * `配色方案`
      */
    ["com.affine.appearanceSettings.color.title"](): string;
    /**
      * `在此编辑所有识光主题变量`
      */
    ["com.affine.appearanceSettings.customize-theme.description"](): string;
    /**
      * `自定义主题`
      */
    ["com.affine.appearanceSettings.customize-theme.title"](): string;
    /**
      * `图片`
      */
    ["com.affine.appearanceSettings.images.title"](): string;
    /**
      * `平滑图片渲染`
      */
    ["com.affine.appearanceSettings.images.antialiasing.title"](): string;
    /**
      * `禁用后，图片将使用最近邻缩放渲染，以保持像素清晰。`
      */
    ["com.affine.appearanceSettings.images.antialiasing.description"](): string;
    /**
      * `重置所有`
      */
    ["com.affine.appearanceSettings.customize-theme.reset"](): string;
    /**
      * `打开主题编辑器`
      */
    ["com.affine.appearanceSettings.customize-theme.open"](): string;
    /**
      * `选择您的字体样式`
      */
    ["com.affine.appearanceSettings.font.description"](): string;
    /**
      * `字体样式`
      */
    ["com.affine.appearanceSettings.font.title"](): string;
    /**
      * `等宽`
      */
    ["com.affine.appearanceSettings.fontStyle.mono"](): string;
    /**
      * `默认`
      */
    ["com.affine.appearanceSettings.fontStyle.sans"](): string;
    /**
      * `衬线`
      */
    ["com.affine.appearanceSettings.fontStyle.serif"](): string;
    /**
      * `选择界面语言。`
      */
    ["com.affine.appearanceSettings.language.description"](): string;
    /**
      * `显示语言`
      */
    ["com.affine.appearanceSettings.language.title"](): string;
    /**
      * `在侧边栏使用噪点背景效果。`
      */
    ["com.affine.appearanceSettings.noisyBackground.description"](): string;
    /**
      * `侧边栏噪点背景`
      */
    ["com.affine.appearanceSettings.noisyBackground.title"](): string;
    /**
      * `侧边栏`
      */
    ["com.affine.appearanceSettings.sidebar.title"](): string;
    /**
      * `识光界面个性化设置`
      */
    ["com.affine.appearanceSettings.subtitle"](): string;
    /**
      * `菜单栏`
      */
    ["com.affine.appearanceSettings.menubar.title"](): string;
    /**
      * `启用菜单栏应用`
      */
    ["com.affine.appearanceSettings.menubar.toggle"](): string;
    /**
      * `在托盘中显示菜单栏应用程序，以便快速访问 识光 或会议记录。`
      */
    ["com.affine.appearanceSettings.menubar.description"](): string;
    /**
      * `窗口行为`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.title"](): string;
    /**
      * `点击托盘图标时启动`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.openOnLeftClick.toggle"](): string;
    /**
      * `点击识光的系统托盘图标时启动识光。`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.openOnLeftClick.description"](): string;
    /**
      * `最小化到托盘`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.minimizeToTray.toggle"](): string;
    /**
      * `最小化识光到系统托盘。`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.minimizeToTray.description"](): string;
    /**
      * `关闭到托盘`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.closeToTray.toggle"](): string;
    /**
      * `关闭识光时最小化到系统托盘。`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.closeToTray.description"](): string;
    /**
      * `启动时最小化`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.startMinimized.toggle"](): string;
    /**
      * `启动识光时最小化到系统托盘。`
      */
    ["com.affine.appearanceSettings.menubar.windowBehavior.startMinimized.description"](): string;
    /**
      * `主题`
      */
    ["com.affine.appearanceSettings.theme.title"](): string;
    /**
      * `外观设置`
      */
    ["com.affine.appearanceSettings.title"](): string;
    /**
      * `在侧边栏使用半透明效果。`
      */
    ["com.affine.appearanceSettings.translucentUI.description"](): string;
    /**
      * `侧边栏的透明效果`
      */
    ["com.affine.appearanceSettings.translucentUI.title"](): string;
    /**
      * `在侧边栏中显示链接的文档`
      */
    ["com.affine.appearanceSettings.showLinkedDocInSidebar.title"](): string;
    /**
      * `控制侧边栏中是否显示链接文档的结构。`
      */
    ["com.affine.appearanceSettings.showLinkedDocInSidebar.description"](): string;
    /**
      * `您当前的邮箱是 {{email}}。我们将向此邮箱发送一个临时的验证链接。`
      */
    ["com.affine.auth.change.email.message"](options: {
        readonly email: string;
    }): string;
    /**
      * `请在下方输入您的新电子邮件地址。我们将把验证链接发送至该电子邮件地址以完成此过程。`
      */
    ["com.affine.auth.change.email.page.subtitle"](): string;
    /**
      * `恭喜！您已成功更新与 识光 账户关联的电子邮件地址。`
      */
    ["com.affine.auth.change.email.page.success.subtitle"](): string;
    /**
      * `邮箱地址已更新！`
      */
    ["com.affine.auth.change.email.page.success.title"](): string;
    /**
      * `更改邮箱地址`
      */
    ["com.affine.auth.change.email.page.title"](): string;
    /**
      * `忘记密码`
      */
    ["com.affine.auth.forget"](): string;
    /**
      * `稍后`
      */
    ["com.affine.auth.later"](): string;
    /**
      * `打开 识光`
      */
    ["com.affine.auth.open.affine"](): string;
    /**
      * `下载应用`
      */
    ["com.affine.auth.open.affine.download-app"](): string;
    /**
      * `重试`
      */
    ["com.affine.auth.open.affine.try-again"](): string;
    /**
      * `仍然遇到问题？`
      */
    ["com.affine.auth.open.affine.still-have-problems"](): string;
    /**
      * `使用浏览器继续`
      */
    ["com.affine.auth.open.affine.continue-with-browser"](): string;
    /**
      * `下载最新客户端`
      */
    ["com.affine.auth.open.affine.download-latest-client"](): string;
    /**
      * `在此处打开`
      */
    ["com.affine.auth.open.affine.doc.open-here"](): string;
    /**
      * `编辑设置`
      */
    ["com.affine.auth.open.affine.doc.edit-settings"](): string;
    /**
      * `需要 识光 桌面应用程序版本 0.18 或更高。`
      */
    ["com.affine.auth.open.affine.doc.footer-text"](): string;
    /**
      * `请输入一个长度在 {{min}}-{{max}} 个字符之间，同时包含字母和数字的密码以继续注册`
      */
    ["com.affine.auth.page.sent.email.subtitle"](options: Readonly<{
        min: string;
        max: string;
    }>): string;
    /**
      * `欢迎来到 识光，即将完成！`
      */
    ["com.affine.auth.page.sent.email.title"](): string;
    /**
      * `密码`
      */
    ["com.affine.auth.password"](): string;
    /**
      * `无效密码`
      */
    ["com.affine.auth.password.error"](): string;
    /**
      * `设置密码失败`
      */
    ["com.affine.auth.password.set-failed"](): string;
    /**
      * `重置密码`
      */
    ["com.affine.auth.reset.password"](): string;
    /**
      * `您将收到一封电子邮件，以便重置密码。请在收件箱中查收。`
      */
    ["com.affine.auth.reset.password.message"](): string;
    /**
      * `密码重置成功`
      */
    ["com.affine.auth.reset.password.page.success"](): string;
    /**
      * `重置您的 识光 密码`
      */
    ["com.affine.auth.reset.password.page.title"](): string;
    /**
      * `发送重置链接`
      */
    ["com.affine.auth.send.reset.password.link"](): string;
    /**
      * `发送设置链接`
      */
    ["com.affine.auth.send.set.password.link"](): string;
    /**
      * `发送验证链接`
      */
    ["com.affine.auth.send.verify.email.hint"](): string;
    /**
      * `验证码`
      */
    ["com.affine.auth.sign.auth.code"](): string;
    /**
      * `无效的验证码`
      */
    ["com.affine.auth.sign.auth.code.invalid"](): string;
    /**
      * `输入验证码`
      */
    ["com.affine.auth.sign.auth.code.continue"](): string;
    /**
      * `重新发送验证码`
      */
    ["com.affine.auth.sign.auth.code.resend"](): string;
    /**
      * `在 {{second}} 秒后重新发送`
      */
    ["com.affine.auth.sign.auth.code.resend.hint"](options: {
        readonly second: string;
    }): string;
    /**
      * `已发送`
      */
    ["com.affine.auth.sent"](): string;
    /**
      * `验证链接发送失败，请稍后重试。`
      */
    ["com.affine.auth.sent.change.email.fail"](): string;
    /**
      * `验证链接已发送`
      */
    ["com.affine.auth.sent.change.email.hint"](): string;
    /**
      * `重置密码链接已发送。`
      */
    ["com.affine.auth.sent.change.password.hint"](): string;
    /**
      * `您的密码已更新！您可以使用新密码登录 识光。`
      */
    ["com.affine.auth.sent.reset.password.success.message"](): string;
    /**
      * `设置密码链接已发送。`
      */
    ["com.affine.auth.sent.set.password.hint"](): string;
    /**
      * `您的密码已保存！您可以使用邮箱和密码登录 识光。`
      */
    ["com.affine.auth.sent.set.password.success.message"](): string;
    /**
      * `验证链接已发送`
      */
    ["com.affine.auth.sent.verify.email.hint"](): string;
    /**
      * `保存电子邮件`
      */
    ["com.affine.auth.set.email.save"](): string;
    /**
      * `设置密码`
      */
    ["com.affine.auth.set.password"](): string;
    /**
      * `请输入一个长度在 {{min}}-{{max}} 个字符之间，同时包含字母和数字的密码以继续注册`
      */
    ["com.affine.auth.set.password.message"](options: Readonly<{
        min: string;
        max: string;
    }>): string;
    /**
      * `至多 {{max}} 个字符`
      */
    ["com.affine.auth.set.password.message.maxlength"](options: {
        readonly max: string;
    }): string;
    /**
      * `至少 {{min}} 个字符`
      */
    ["com.affine.auth.set.password.message.minlength"](options: {
        readonly min: string;
    }): string;
    /**
      * `密码设置成功`
      */
    ["com.affine.auth.set.password.page.success"](): string;
    /**
      * `设置您的 识光 密码`
      */
    ["com.affine.auth.set.password.page.title"](): string;
    /**
      * `密码长度至少需要 {{min}} 个字符`
      */
    ["com.affine.auth.set.password.placeholder"](options: {
        readonly min: string;
    }): string;
    /**
      * `确认密码`
      */
    ["com.affine.auth.set.password.placeholder.confirm"](): string;
    /**
      * `保存密码`
      */
    ["com.affine.auth.set.password.save"](): string;
    /**
      * `取消`
      */
    ["com.affine.auth.sign-out.confirm-modal.cancel"](): string;
    /**
      * `登出`
      */
    ["com.affine.auth.sign-out.confirm-modal.confirm"](): string;
    /**
      * `退出登录后，此账号关联的同步工作区将从当前设备移除；再次登录后会重新添加。`
      */
    ["com.affine.auth.sign-out.confirm-modal.description"](): string;
    /**
      * `登出？`
      */
    ["com.affine.auth.sign-out.confirm-modal.title"](): string;
    /**
      * `如果您没有收到电子邮件，请检查您的垃圾邮件文件夹。`
      */
    ["com.affine.auth.sign.auth.code.message"](): string;
    /**
      * `使用魔法链接登录`
      */
    ["com.affine.auth.sign.auth.code.send-email.sign-in"](): string;
    /**
      * `条款与条件`
      */
    ["com.affine.auth.sign.condition"](): string;
    /**
      * `以电子邮件继续`
      */
    ["com.affine.auth.sign.email.continue"](): string;
    /**
      * `无效的电子邮件`
      */
    ["com.affine.auth.sign.email.error"](): string;
    /**
      * `请输入电子邮件地址`
      */
    ["com.affine.auth.sign.email.placeholder"](): string;
    /**
      * `登录 识光`
      */
    ["com.affine.auth.sign.in"](): string;
    /**
      * `请确认电子邮件`
      */
    ["com.affine.auth.sign.in.sent.email.subtitle"](): string;
    /**
      * `自托管 识光`
      */
    ["com.affine.auth.sign.add-selfhosted.title"](): string;
    /**
      * `连接到你的 识光 服务器`
      */
    ["com.affine.auth.sign.add-selfhosted"](): string;
    /**
      * `识光 服务器地址`
      */
    ["com.affine.auth.sign.add-selfhosted.baseurl"](): string;
    /**
      * `连接`
      */
    ["com.affine.auth.sign.add-selfhosted.connect-button"](): string;
    /**
      * `无法连接至服务器。`
      */
    ["com.affine.auth.sign.add-selfhosted.error"](): string;
    /**
      * `隐私政策`
      */
    ["com.affine.auth.sign.policy"](): string;
    /**
      * `注册`
      */
    ["com.affine.auth.sign.up"](): string;
    /**
      * `创建您的账号`
      */
    ["com.affine.auth.sign.up.sent.email.subtitle"](): string;
    /**
      * `识光 客户端将自动打开或重定向到网页端，如果您遇到任何问题，可以点击下方按钮手动打开 识光。`
      */
    ["com.affine.auth.sign.up.success.subtitle"](): string;
    /**
      * `注册成功`
      */
    ["com.affine.auth.sign.up.success.title"](): string;
    /**
      * `您已成功登录。应用程序将自动打开或重定向至网页版。 如果您遇到任何问题，您还可以单击下面的按钮手动打开 识光 应用程序。`
      */
    ["com.affine.auth.signed.success.subtitle"](): string;
    /**
      * `即将完成！`
      */
    ["com.affine.auth.signed.success.title"](): string;
    /**
      * `服务器错误，请稍后重试。`
      */
    ["com.affine.auth.toast.message.failed"](): string;
    /**
      * `您已登录 识光，开始同步您的数据！`
      */
    ["com.affine.auth.toast.message.signed-in"](): string;
    /**
      * `无法登录`
      */
    ["com.affine.auth.toast.title.failed"](): string;
    /**
      * `已登录`
      */
    ["com.affine.auth.toast.title.signed-in"](): string;
    /**
      * `您当前的邮箱是 {{email}}。我们将向此邮箱发送一个临时的验证链接。`
      */
    ["com.affine.auth.verify.email.message"](options: {
        readonly email: string;
    }): string;
    /**
      * `返回首页`
      */
    ["com.affine.backButton"](): string;
    /**
      * `此工作区只保存在当前浏览器中。磁盘空间不足时，浏览器可能会自动移除它。启用 识光 同步可以更稳妥地保留数据。`
      */
    ["com.affine.banner.local-warning"](): string;
    /**
      * `识光 Cloud`
      */
    ["com.affine.brand.affineCloud"](): string;
    /**
      * `一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月`
      */
    ["com.affine.calendar-date-picker.month-names"](): string;
    /**
      * `今天`
      */
    ["com.affine.calendar-date-picker.today"](): string;
    /**
      * `周日,周一,周二,周三,周四,周五,周六`
      */
    ["com.affine.calendar-date-picker.week-days"](): string;
    /**
      * `由 识光.Pro 托管，保存、同步和备份您的所有数据。`
      */
    ["com.affine.cloud-scroll-tip.caption"](): string;
    /**
      * `识光 Cloud`
      */
    ["com.affine.cloud-scroll-tip.title"](): string;
    /**
      * `精选`
      */
    ["com.affine.cmdk.affine.category.affine.collections"](): string;
    /**
      * `创建`
      */
    ["com.affine.cmdk.affine.category.affine.creation"](): string;
    /**
      * `无界`
      */
    ["com.affine.cmdk.affine.category.affine.edgeless"](): string;
    /**
      * `常规`
      */
    ["com.affine.cmdk.affine.category.affine.general"](): string;
    /**
      * `帮助`
      */
    ["com.affine.cmdk.affine.category.affine.help"](): string;
    /**
      * `布局控制`
      */
    ["com.affine.cmdk.affine.category.affine.layout"](): string;
    /**
      * `导航`
      */
    ["com.affine.cmdk.affine.category.affine.navigation"](): string;
    /**
      * `文档`
      */
    ["com.affine.cmdk.affine.category.affine.pages"](): string;
    /**
      * `最近`
      */
    ["com.affine.cmdk.affine.category.affine.recent"](): string;
    /**
      * `设置`
      */
    ["com.affine.cmdk.affine.category.affine.settings"](): string;
    /**
      * `标签`
      */
    ["com.affine.cmdk.affine.category.affine.tags"](): string;
    /**
      * `更新`
      */
    ["com.affine.cmdk.affine.category.affine.updates"](): string;
    /**
      * `无界命令`
      */
    ["com.affine.cmdk.affine.category.editor.edgeless"](): string;
    /**
      * `插入对象`
      */
    ["com.affine.cmdk.affine.category.editor.insert-object"](): string;
    /**
      * `文档命令`
      */
    ["com.affine.cmdk.affine.category.editor.page"](): string;
    /**
      * `结果`
      */
    ["com.affine.cmdk.affine.category.results"](): string;
    /**
      * `更改客户端边框样式为`
      */
    ["com.affine.cmdk.affine.client-border-style.to"](): string;
    /**
      * `更改颜色模式为`
      */
    ["com.affine.cmdk.affine.color-mode.to"](): string;
    /**
      * `联系我们`
      */
    ["com.affine.cmdk.affine.contact-us"](): string;
    /**
      * `创建并插入文档 "{{keyWord}}" `
      */
    ["com.affine.cmdk.affine.create-new-doc-and-insert"](options: {
        readonly keyWord: string;
    }): string;
    /**
      * `新建 “{{keyWord}}” 为标题的无界页面`
      */
    ["com.affine.cmdk.affine.create-new-edgeless-as"](options: {
        readonly keyWord: string;
    }): string;
    /**
      * `新建 “{{keyWord}}” 为标题的文档`
      */
    ["com.affine.cmdk.affine.create-new-page-as"](options: {
        readonly keyWord: string;
    }): string;
    /**
      * `更改显示语言为`
      */
    ["com.affine.cmdk.affine.display-language.to"](): string;
    /**
      * `加入收藏`
      */
    ["com.affine.cmdk.affine.editor.add-to-favourites"](): string;
    /**
      * `开始演示`
      */
    ["com.affine.cmdk.affine.editor.edgeless.presentation-start"](): string;
    /**
      * `从收藏中移除`
      */
    ["com.affine.cmdk.affine.editor.remove-from-favourites"](): string;
    /**
      * `从垃圾箱恢复`
      */
    ["com.affine.cmdk.affine.editor.restore-from-trash"](): string;
    /**
      * `显示文档历史模式`
      */
    ["com.affine.cmdk.affine.editor.reveal-page-history-modal"](): string;
    /**
      * `该文档已移至回收站，您可以恢复或永久删除它。`
      */
    ["com.affine.cmdk.affine.editor.trash-footer-hint"](): string;
    /**
      * `更改字体样式为`
      */
    ["com.affine.cmdk.affine.font-style.to"](): string;
    /**
      * `更改全宽布局为`
      */
    ["com.affine.cmdk.affine.full-width-layout.to"](): string;
    /**
      * `将新页面的默认宽度更改为标准`
      */
    ["com.affine.cmdk.affine.default-page-width-layout.standard"](): string;
    /**
      * `将新页面的默认宽度更改为全宽`
      */
    ["com.affine.cmdk.affine.default-page-width-layout.full-width"](): string;
    /**
      * `将当前页面宽度更改为标准`
      */
    ["com.affine.cmdk.affine.current-page-width-layout.standard"](): string;
    /**
      * `将当前页面宽度更改为全宽`
      */
    ["com.affine.cmdk.affine.current-page-width-layout.full-width"](): string;
    /**
      * `开始使用`
      */
    ["com.affine.cmdk.affine.getting-started"](): string;
    /**
      * `导入工作区`
      */
    ["com.affine.cmdk.affine.import-workspace"](): string;
    /**
      * `将这个链接插入到当前文档`
      */
    ["com.affine.cmdk.affine.insert-link"](): string;
    /**
      * `折叠左侧边栏`
      */
    ["com.affine.cmdk.affine.left-sidebar.collapse"](): string;
    /**
      * `展开左侧边栏`
      */
    ["com.affine.cmdk.affine.left-sidebar.expand"](): string;
    /**
      * `前往所有文档`
      */
    ["com.affine.cmdk.affine.navigation.goto-all-pages"](): string;
    /**
      * `前往无界列表`
      */
    ["com.affine.cmdk.affine.navigation.goto-edgeless-list"](): string;
    /**
      * `前往页面列表`
      */
    ["com.affine.cmdk.affine.navigation.goto-page-list"](): string;
    /**
      * `前往垃圾箱`
      */
    ["com.affine.cmdk.affine.navigation.goto-trash"](): string;
    /**
      * `前往工作区`
      */
    ["com.affine.cmdk.affine.navigation.goto-workspace"](): string;
    /**
      * `前往账户设置`
      */
    ["com.affine.cmdk.affine.navigation.open-account-settings"](): string;
    /**
      * `前往设置`
      */
    ["com.affine.cmdk.affine.navigation.open-settings"](): string;
    /**
      * `新建无界页面`
      */
    ["com.affine.cmdk.affine.new-edgeless-page"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.cmdk.affine.new-page"](): string;
    /**
      * `新建工作区`
      */
    ["com.affine.cmdk.affine.new-workspace"](): string;
    /**
      * `更改侧边栏噪声背景为`
      */
    ["com.affine.cmdk.affine.noise-background-on-the-sidebar.to"](): string;
    /**
      * `重启以升级`
      */
    ["com.affine.cmdk.affine.restart-to-upgrade"](): string;
    /**
      * `关`
      */
    ["com.affine.cmdk.affine.switch-state.off"](): string;
    /**
      * `开`
      */
    ["com.affine.cmdk.affine.switch-state.on"](): string;
    /**
      * `更改侧边栏半透明界面为`
      */
    ["com.affine.cmdk.affine.translucent-ui-on-the-sidebar.to"](): string;
    /**
      * `新内容`
      */
    ["com.affine.cmdk.affine.whats-new"](): string;
    /**
      * `搜索文档或粘贴链接...`
      */
    ["com.affine.cmdk.docs.placeholder"](): string;
    /**
      * `插入链接`
      */
    ["com.affine.cmdk.insert-links"](): string;
    /**
      * `找到 0 个结果`
      */
    ["com.affine.cmdk.no-results"](): string;
    /**
      * `找到 0 个结果`
      */
    ["com.affine.cmdk.no-results-for"](): string;
    /**
      * `输入命令或搜索任何内容...`
      */
    ["com.affine.cmdk.placeholder"](): string;
    /**
      * `切换到$t(com.affine.edgelessMode)`
      */
    ["com.affine.cmdk.switch-to-edgeless"](): string;
    /**
      * `切换到$t(com.affine.pageMode)`
      */
    ["com.affine.cmdk.switch-to-page"](): string;
    /**
      * `删除`
      */
    ["com.affine.collection-bar.action.tooltip.delete"](): string;
    /**
      * `编辑`
      */
    ["com.affine.collection-bar.action.tooltip.edit"](): string;
    /**
      * `固定到侧边栏`
      */
    ["com.affine.collection-bar.action.tooltip.pin"](): string;
    /**
      * `取消固定`
      */
    ["com.affine.collection-bar.action.tooltip.unpin"](): string;
    /**
      * `您想添加一篇文档到当前精选吗？如果根据规则进行过滤，这将添加一组包含这篇文档的规则。`
      */
    ["com.affine.collection.add-doc.confirm.description"](): string;
    /**
      * `添加新的文档到精选`
      */
    ["com.affine.collection.add-doc.confirm.title"](): string;
    /**
      * `文档已存在`
      */
    ["com.affine.collection.addPage.alreadyExists"](): string;
    /**
      * `页面添加成功`
      */
    ["com.affine.collection.addPage.success"](): string;
    /**
      * `添加文档`
      */
    ["com.affine.collection.addPages"](): string;
    /**
      * `添加规则`
      */
    ["com.affine.collection.addRules"](): string;
    /**
      * `所有精选`
      */
    ["com.affine.collection.allCollections"](): string;
    /**
      * `空的精选`
      */
    ["com.affine.collection.emptyCollection"](): string;
    /**
      * `精选是一个智能文件夹，您可以手动添加文档或通过规则自动添加文档。`
      */
    ["com.affine.collection.emptyCollectionDescription"](): string;
    /**
      * `帮助信息`
      */
    ["com.affine.collection.helpInfo"](): string;
    /**
      * `编辑精选`
      */
    ["com.affine.collection.menu.edit"](): string;
    /**
      * `重命名`
      */
    ["com.affine.collection.menu.rename"](): string;
    /**
      * `成功移除`
      */
    ["com.affine.collection.removePage.success"](): string;
    /**
      * `精选为空`
      */
    ["com.affine.collections.empty.message"](): string;
    /**
      * `新建精选`
      */
    ["com.affine.collections.empty.new-collection-button"](): string;
    /**
      * `精选`
      */
    ["com.affine.collections.header"](): string;
    /**
      * `无法复制图片`
      */
    ["com.affine.copy.asImage.notAvailable.title"](): string;
    /**
      * `“复制为图片”功能仅在客户端中可用，请下载并安装客户端来使用此功能。`
      */
    ["com.affine.copy.asImage.notAvailable.message"](): string;
    /**
      * `下载客户端`
      */
    ["com.affine.copy.asImage.notAvailable.action"](): string;
    /**
      * `图片已复制`
      */
    ["com.affine.copy.asImage.success"](): string;
    /**
      * `图片复制失败`
      */
    ["com.affine.copy.asImage.failed"](): string;
    /**
      * `复制为 Markdown`
      */
    ["com.affine.export.copy-markdown"](): string;
    /**
      * `已复制为 Markdown`
      */
    ["com.affine.export.copied-as-markdown"](): string;
    /**
      * `取消`
      */
    ["com.affine.confirmModal.button.cancel"](): string;
    /**
      * `确认`
      */
    ["com.affine.confirmModal.button.ok"](): string;
    /**
      * `今年`
      */
    ["com.affine.currentYear"](): string;
    /**
      * `正在删除 {{count}} 个标签，此操作无法撤销，所有内容将会丢失。`
      */
    ["com.affine.delete-tags.confirm.multi-tag-description"](options: {
        readonly count: string;
    }): string;
    /**
      * `删除标签？`
      */
    ["com.affine.delete-tags.confirm.title"](): string;
    /**
      * `已删除 {{count}} 个标签`
    
      * - com.affine.delete-tags.count_one: `已删除 {{count}} 个标签`
    
      * - com.affine.delete-tags.count_other: `已删除 {{count}} 个标签`
      */
    ["com.affine.delete-tags.count"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `已删除 {{count}} 个标签`
      */
    ["com.affine.delete-tags.count_one"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `已删除 {{count}} 个标签`
      */
    ["com.affine.delete-tags.count_other"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `从此设备删除工作区，并可选择删除所有数据。`
      */
    ["com.affine.deleteLeaveWorkspace.description"](): string;
    /**
      * `退出工作区`
      */
    ["com.affine.deleteLeaveWorkspace.leave"](): string;
    /**
      * `退出后，您将无法再访问此工作区的内容。`
      */
    ["com.affine.deleteLeaveWorkspace.leaveDescription"](): string;
    /**
      * `文档`
      */
    ["com.affine.docs.header"](): string;
    /**
      * `在空白白板画画`
      */
    ["com.affine.draw_with_a_blank_whiteboard"](): string;
    /**
      * `更早`
      */
    ["com.affine.earlier"](): string;
    /**
      * `无界模式`
      */
    ["com.affine.edgelessMode"](): string;
    /**
      * `取消`
      */
    ["com.affine.editCollection.button.cancel"](): string;
    /**
      * `创建`
      */
    ["com.affine.editCollection.button.create"](): string;
    /**
      * `创建精选`
      */
    ["com.affine.editCollection.createCollection"](): string;
    /**
      * `过滤`
      */
    ["com.affine.editCollection.filters"](): string;
    /**
      * `文档`
      */
    ["com.affine.editCollection.pages"](): string;
    /**
      * `清除页面`
      */
    ["com.affine.editCollection.pages.clear"](): string;
    /**
      * `重命名精选`
      */
    ["com.affine.editCollection.renameCollection"](): string;
    /**
      * `规则`
      */
    ["com.affine.editCollection.rules"](): string;
    /**
      * `显示 1 篇文档。`
      */
    ["com.affine.editCollection.rules.countTips.one"](): string;
    /**
      * `显示 0 篇文档。`
      */
    ["com.affine.editCollection.rules.countTips.zero"](): string;
    /**
      * `没有结果`
      */
    ["com.affine.editCollection.rules.empty.noResults"](): string;
    /**
      * `没有文档符合过滤规则`
      */
    ["com.affine.editCollection.rules.empty.noResults.tips"](): string;
    /**
      * `没有规则`
      */
    ["com.affine.editCollection.rules.empty.noRules"](): string;
    /**
      * `添加被选中的文档`
      */
    ["com.affine.editCollection.rules.include.add"](): string;
    /**
      * `是`
      */
    ["com.affine.editCollection.rules.include.is"](): string;
    /**
      * `不是`
      */
    ["com.affine.editCollection.rules.include.is-not"](): string;
    /**
      * `文档`
      */
    ["com.affine.editCollection.rules.include.page"](): string;
    /**
      * `“选定文档”是指手动添加文档，而不是通过规则匹配自动添加文档。 您可以通过“添加所选文档”选项或通过拖放来手动添加文档。`
      */
    ["com.affine.editCollection.rules.include.tips"](): string;
    /**
      * `什么是“选定文档”？`
      */
    ["com.affine.editCollection.rules.include.tipsTitle"](): string;
    /**
      * `选中的文档`
      */
    ["com.affine.editCollection.rules.include.title"](): string;
    /**
      * `预览`
      */
    ["com.affine.editCollection.rules.preview"](): string;
    /**
      * `重置`
      */
    ["com.affine.editCollection.rules.reset"](): string;
    /**
      * `自动`
      */
    ["com.affine.editCollection.rules.tips.highlight"](): string;
    /**
      * `保存`
      */
    ["com.affine.editCollection.save"](): string;
    /**
      * `保存精选`
      */
    ["com.affine.editCollection.saveCollection"](): string;
    /**
      * `搜索文档...`
      */
    ["com.affine.editCollection.search.placeholder"](): string;
    /**
      * `未命名精选`
      */
    ["com.affine.editCollection.untitledCollection"](): string;
    /**
      * `更新精选`
      */
    ["com.affine.editCollection.updateCollection"](): string;
    /**
      * `精选是一个智能文件夹，您可以手动添加页面或通过规则自动添加文档。`
      */
    ["com.affine.editCollectionName.createTips"](): string;
    /**
      * `名称`
      */
    ["com.affine.editCollectionName.name"](): string;
    /**
      * `精选名称`
      */
    ["com.affine.editCollectionName.name.placeholder"](): string;
    /**
      * `默认为无界模式`
      */
    ["com.affine.editorDefaultMode.edgeless"](): string;
    /**
      * `默认为文档模式`
      */
    ["com.affine.editorDefaultMode.page"](): string;
    /**
      * `添加文档`
      */
    ["com.affine.empty.collection-detail.action.add-doc"](): string;
    /**
      * `添加规则`
      */
    ["com.affine.empty.collection-detail.action.add-rule"](): string;
    /**
      * `精选是一个智能文件夹，您可以手动添加文档或通过规则自动添加文档。`
      */
    ["com.affine.empty.collection-detail.description"](): string;
    /**
      * `空的精选`
      */
    ["com.affine.empty.collection-detail.title"](): string;
    /**
      * `添加精选`
      */
    ["com.affine.empty.collections.action.new-collection"](): string;
    /**
      * `在这里创建您的第一个精选。`
      */
    ["com.affine.empty.collections.description"](): string;
    /**
      * `精选管理`
      */
    ["com.affine.empty.collections.title"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.empty.docs.action.new-doc"](): string;
    /**
      * `在这里创建你的第一个文档。`
      */
    ["com.affine.empty.docs.all-description"](): string;
    /**
      * `文档管理`
      */
    ["com.affine.empty.docs.title"](): string;
    /**
      * `已删除的文档将显示在此处。`
      */
    ["com.affine.empty.docs.trash-description"](): string;
    /**
      * `为您的文档创建一个新标签。`
      */
    ["com.affine.empty.tags.description"](): string;
    /**
      * `标签管理`
      */
    ["com.affine.empty.tags.title"](): string;
    /**
      * `这里还没有文档`
      */
    ["com.affine.emptyDesc"](): string;
    /**
      * `取消`
      */
    ["com.affine.enableAffineCloudModal.button.cancel"](): string;
    /**
      * `为 {{workspaceName}} 启用 识光 同步`
      */
    ["com.affine.enableAffineCloudModal.custom-server.title"](options: {
        readonly workspaceName: string;
    }): string;
    /**
      * `选择这个工作区要同步到的位置。`
      */
    ["com.affine.enableAffineCloudModal.custom-server.description"](): string;
    /**
      * `启用 识光 同步`
      */
    ["com.affine.enableAffineCloudModal.custom-server.enable"](): string;
    /**
      * `隐藏错误详情`
      */
    ["com.affine.error.hide-error"](): string;
    /**
      * `文档内容丢失`
      */
    ["com.affine.error.no-page-root.title"](): string;
    /**
      * `加载文档内容需要稍长的时间。`
      */
    ["com.affine.error.loading-timeout-error"](): string;
    /**
      * `重新连接`
      */
    ["com.affine.error.refetch"](): string;
    /**
      * `重新加载 识光`
      */
    ["com.affine.error.reload"](): string;
    /**
      * `刷新`
      */
    ["com.affine.error.retry"](): string;
    /**
      * `出了点问题...`
      */
    ["com.affine.error.unexpected-error.title"](): string;
    /**
      * `请重新请求重置密码链接。`
      */
    ["com.affine.expired.page.subtitle"](): string;
    /**
      * `请获取新的邀请链接`
      */
    ["com.affine.expired.page.new-subtitle"](): string;
    /**
      * `链接已失效...`
      */
    ["com.affine.expired.page.title"](): string;
    /**
      * `请稍后再试。`
      */
    ["com.affine.export.error.message"](): string;
    /**
      * `未知错误引发导出失败`
      */
    ["com.affine.export.error.title"](): string;
    /**
      * `打印`
      */
    ["com.affine.export.print"](): string;
    /**
      * `请打开下载文件夹以查看。`
      */
    ["com.affine.export.success.message"](): string;
    /**
      * `导出成功`
      */
    ["com.affine.export.success.title"](): string;
    /**
      * `加入收藏`
      */
    ["com.affine.favoritePageOperation.add"](): string;
    /**
      * `从收藏中移除`
      */
    ["com.affine.favoritePageOperation.remove"](): string;
    /**
      * `筛选`
      */
    ["com.affine.filter"](): string;
    /**
      * `添加筛选规则`
      */
    ["com.affine.filter.add-filter"](): string;
    /**
      * `晚于`
      */
    ["com.affine.filter.after"](): string;
    /**
      * `早于`
      */
    ["com.affine.filter.before"](): string;
    /**
      * `包含以下所有`
      */
    ["com.affine.filter.contains all"](): string;
    /**
      * `包含以下之一`
      */
    ["com.affine.filter.contains one of"](): string;
    /**
      * `不包含以下所有`
      */
    ["com.affine.filter.does not contains all"](): string;
    /**
      * `不包含以下之一`
      */
    ["com.affine.filter.does not contains one of"](): string;
    /**
      * `空`
      */
    ["com.affine.filter.empty-tag"](): string;
    /**
      * `空`
      */
    ["com.affine.filter.empty"](): string;
    /**
      * `否`
      */
    ["com.affine.filter.false"](): string;
    /**
      * `为`
      */
    ["com.affine.filter.is"](): string;
    /**
      * `为空`
      */
    ["com.affine.filter.is empty"](): string;
    /**
      * `不为空`
      */
    ["com.affine.filter.is not empty"](): string;
    /**
      * `已收藏`
      */
    ["com.affine.filter.is-favourited"](): string;
    /**
      * `已分享`
      */
    ["com.affine.filter.is-public"](): string;
    /**
      * `介于`
      */
    ["com.affine.filter.between"](): string;
    /**
      * `过去 3 天`
      */
    ["com.affine.filter.last 3 days"](): string;
    /**
      * `过去 7 天`
      */
    ["com.affine.filter.last 7 days"](): string;
    /**
      * `过去 15 天`
      */
    ["com.affine.filter.last 15 days"](): string;
    /**
      * `过去 30 天`
      */
    ["com.affine.filter.last 30 days"](): string;
    /**
      * `本周`
      */
    ["com.affine.filter.this week"](): string;
    /**
      * `本月`
      */
    ["com.affine.filter.this month"](): string;
    /**
      * `本季度`
      */
    ["com.affine.filter.this quarter"](): string;
    /**
      * `今年`
      */
    ["com.affine.filter.this year"](): string;
    /**
      * `最近`
      */
    ["com.affine.filter.last"](): string;
    /**
      * `保存视图`
      */
    ["com.affine.filter.save-view"](): string;
    /**
      * `是`
      */
    ["com.affine.filter.true"](): string;
    /**
      * `添加筛选条件`
      */
    ["com.affine.filterList.button.add"](): string;
    /**
      * `显示`
      */
    ["com.affine.explorer.display-menu.button"](): string;
    /**
      * `分组`
      */
    ["com.affine.explorer.display-menu.grouping"](): string;
    /**
      * `移除分组`
      */
    ["com.affine.explorer.display-menu.grouping.remove"](): string;
    /**
      * `排序`
      */
    ["com.affine.explorer.display-menu.ordering"](): string;
    /**
      * `以页面模式查看`
      */
    ["com.affine.header.mode-switch.page"](): string;
    /**
      * `以无界画布查看`
      */
    ["com.affine.header.mode-switch.edgeless"](): string;
    /**
      * `添加标签`
      */
    ["com.affine.header.option.add-tag"](): string;
    /**
      * `复制`
      */
    ["com.affine.header.option.duplicate"](): string;
    /**
      * `在客户端中打开`
      */
    ["com.affine.header.option.open-in-desktop"](): string;
    /**
      * `查看所有的 Frames`
      */
    ["com.affine.header.option.view-frame"](): string;
    /**
      * `查看目录`
      */
    ["com.affine.header.option.view-toc"](): string;
    /**
      * `目录`
      */
    ["com.affine.header.menu.toc"](): string;
    /**
      * `联系我们`
      */
    ["com.affine.helpIsland.contactUs"](): string;
    /**
      * `开始使用`
      */
    ["com.affine.helpIsland.gettingStarted"](): string;
    /**
      * `帮助与反馈`
      */
    ["com.affine.helpIsland.helpAndFeedback"](): string;
    /**
      * `取消`
      */
    ["com.affine.history-vision.tips-modal.cancel"](): string;
    /**
      * `启用 识光 同步`
      */
    ["com.affine.history-vision.tips-modal.confirm"](): string;
    /**
      * `历史版本功能不支持本地工作区。启用 识光 同步后，就可以为这个工作区使用历史版本。`
      */
    ["com.affine.history-vision.tips-modal.description"](): string;
    /**
      * `历史版本需要 识光 同步`
      */
    ["com.affine.history-vision.tips-modal.title"](): string;
    /**
      * `返回文档`
      */
    ["com.affine.history.back-to-page"](): string;
    /**
      * `您即将将文档的当前版本恢复到可用的最新版本。 此操作将覆盖最新版本之前所做的任何更改。`
      */
    ["com.affine.history.confirm-restore-modal.hint"](): string;
    /**
      * `加载更多`
      */
    ["com.affine.history.confirm-restore-modal.load-more"](): string;
    /**
      * `有限的文档历史`
      */
    ["com.affine.history.confirm-restore-modal.plan-prompt.limited-title"](): string;
    /**
      * `帮助信息`
      */
    ["com.affine.history.confirm-restore-modal.plan-prompt.title"](): string;
    /**
      * `升级`
      */
    ["com.affine.history.confirm-restore-modal.pro-plan-prompt.upgrade"](): string;
    /**
      * `恢复`
      */
    ["com.affine.history.confirm-restore-modal.restore"](): string;
    /**
      * `这篇文档尚未孕育出一丝历史的枝芽！`
      */
    ["com.affine.history.empty-prompt.description"](): string;
    /**
      * `历史记录为空`
      */
    ["com.affine.history.empty-prompt.title"](): string;
    /**
      * `恢复当前版本`
      */
    ["com.affine.history.restore-current-version"](): string;
    /**
      * `历史版本`
      */
    ["com.affine.history.version-history"](): string;
    /**
      * `查看历史版本`
      */
    ["com.affine.history.view-history-version"](): string;
    /**
      * `创建至新的工作区`
      */
    ["com.affine.import-template.dialog.createDocToNewWorkspace"](): string;
    /**
      * `在"{{workspace}}"中新建文档`
      */
    ["com.affine.import-template.dialog.createDocToWorkspace"](options: {
        readonly workspace: string;
    }): string;
    /**
      * `使用"{{templateName}}"模版创建文档`
      */
    ["com.affine.import-template.dialog.createDocWithTemplate"](options: {
        readonly templateName: string;
    }): string;
    /**
      * `插入模板失败，请重试。`
      */
    ["com.affine.import-template.dialog.errorImport"](): string;
    /**
      * `读取模版失败，请重试。`
      */
    ["com.affine.import-template.dialog.errorLoad"](): string;
    /**
      * `创建至新的工作区`
      */
    ["com.affine.import-clipper.dialog.createDocToNewWorkspace"](): string;
    /**
      * `在"{{workspace}}"中新建文档`
      */
    ["com.affine.import-clipper.dialog.createDocToWorkspace"](options: {
        readonly workspace: string;
    }): string;
    /**
      * `从Web Clipper创建文档`
      */
    ["com.affine.import-clipper.dialog.createDocFromClipper"](): string;
    /**
      * `导入内容失败，请重试。`
      */
    ["com.affine.import-clipper.dialog.errorImport"](): string;
    /**
      * `读取内容失败，请重试。`
      */
    ["com.affine.import-clipper.dialog.errorLoad"](): string;
    /**
      * `支持 Markdown/Notion`
      */
    ["com.affine.import_file"](): string;
    /**
      * `识光 工作区数据`
      */
    ["com.affine.import.affine-workspace-data"](): string;
    /**
      * `Bear（.bear2bk，实验性）`
      */
    ["com.affine.import.bear"](): string;
    /**
      * `导入你的 Bear 笔记备份。标签将转换为 识光 标签和文件夹。`
      */
    ["com.affine.import.bear.tooltip"](): string;
    /**
      * `Microsoft Word (.docx)`
      */
    ["com.affine.import.docx"](): string;
    /**
      * `导入你的 .docx 文件。`
      */
    ["com.affine.import.docx.tooltip"](): string;
    /**
      * `HTML`
      */
    ["com.affine.import.html-files"](): string;
    /**
      * `这是一个实验性功能，可能不完全完美，导入后可能会导致数据丢失。`
      */
    ["com.affine.import.html-files.tooltip"](): string;
    /**
      * `Markdown 文件 (.md)`
      */
    ["com.affine.import.markdown-files"](): string;
    /**
      * `Markdown 文件（带媒体文件） (.zip)`
      */
    ["com.affine.import.markdown-with-media-files"](): string;
    /**
      * `请上传带有附件的 Markdown 压缩包，这是一个实验性功能，可能不完全完美，导入后可能会导致数据丢失。`
      */
    ["com.affine.import.markdown-with-media-files.tooltip"](): string;
    /**
      * `如果您希望请求支持其他文件类型，请随时告诉我们`
      */
    ["com.affine.import.modal.tip"](): string;
    /**
      * `Notion`
      */
    ["com.affine.import.notion"](): string;
    /**
      * `导入您的 Notion 数据。支持导入格式：HTML 带子页面。`
      */
    ["com.affine.import.notion.tooltip"](): string;
    /**
      * `OneNote（实验性）`
      */
    ["com.affine.import.onenote"](): string;
    /**
      * `导入 OneNote .one、.onetoc2 或 .onepkg 文件。仅桌面客户端可用。`
      */
    ["com.affine.import.onenote.tooltip"](): string;
    /**
      * `该格式导入器仅在 识光 桌面客户端可用。`
      */
    ["com.affine.import.onenote.desktop-only"](): string;
    /**
      * `Obsidian 仓库（实验性）`
      */
    ["com.affine.import.obsidian"](): string;
    /**
      * `导入 Obsidian 仓库。选择一个文件夹以导入所有笔记、图片和资源，并解析 wiki 链接。`
      */
    ["com.affine.import.obsidian.tooltip"](): string;
    /**
      * `快照`
      */
    ["com.affine.import.snapshot"](): string;
    /**
      * `导入您的 识光 工作区和页面快照文件。`
      */
    ["com.affine.import.snapshot.tooltip"](): string;
    /**
      * `.affine 文件`
      */
    ["com.affine.import.dotaffinefile"](): string;
    /**
      * `导入您的识光数据库文件 (.affine)`
      */
    ["com.affine.import.dotaffinefile.tooltip"](): string;
    /**
      * `导入失败，请重试。`
      */
    ["com.affine.import.status.failed.message"](): string;
    /**
      * `未选择文件`
      */
    ["com.affine.import.status.failed.message.no-file-selected"](): string;
    /**
      * `导入失败`
      */
    ["com.affine.import.status.failed.title"](): string;
    /**
      * `正在导入您的数据，请耐心等待。`
      */
    ["com.affine.import.status.importing.message"](): string;
    /**
      * `导入中...`
      */
    ["com.affine.import.status.importing.title"](): string;
    /**
      * `您的文档已成功导入，感谢选择 识光。有任何问题请随时反馈给我们`
      */
    ["com.affine.import.status.success.message"](): string;
    /**
      * `导入完成`
      */
    ["com.affine.import.status.success.title"](): string;
    /**
      * `取消`
      */
    ["com.affine.inviteModal.button.cancel"](): string;
    /**
      * `稍后`
      */
    ["com.affine.issue-feedback.cancel"](): string;
    /**
      * `在 GitHUb 分享反馈`
      */
    ["com.affine.issue-feedback.confirm"](): string;
    /**
      * `有任何反馈？ 我们都洗耳恭听！ 在 GitHub 分享反馈，让我们了解您的想法和建议。`
      */
    ["com.affine.issue-feedback.description"](): string;
    /**
      * `在 GitHub 分享您的反馈`
      */
    ["com.affine.issue-feedback.title"](): string;
    /**
      * `Journals`
      */
    ["com.affine.journal.app-sidebar-title"](): string;
    /**
      * `还有 {{count}} 篇文章`
      */
    ["com.affine.journal.conflict-show-more"](options: {
        readonly count: string;
    }): string;
    /**
      * `创建`
      */
    ["com.affine.journal.created-today"](): string;
    /**
      * `你还没有创建任何东西`
      */
    ["com.affine.journal.daily-count-created-empty-tips"](): string;
    /**
      * `你还没有任何更新`
      */
    ["com.affine.journal.daily-count-updated-empty-tips"](): string;
    /**
      * `更新`
      */
    ["com.affine.journal.updated-today"](): string;
    /**
      * `暂无日程`
      */
    ["com.affine.journal.placeholder.title"](): string;
    /**
      * `创建一篇日记，开始记录吧。`
      */
    ["com.affine.journal.placeholder.description"](): string;
    /**
      * `创建日记`
      */
    ["com.affine.journal.placeholder.create"](): string;
    /**
      * `就是现在`
      */
    ["com.affine.just-now"](): string;
    /**
      * `居中对齐`
      */
    ["com.affine.keyboardShortcuts.alignCenter"](): string;
    /**
      * `左对齐`
      */
    ["com.affine.keyboardShortcuts.alignLeft"](): string;
    /**
      * `右对齐`
      */
    ["com.affine.keyboardShortcuts.alignRight"](): string;
    /**
      * `添加日常笔记快捷键`
      */
    ["com.affine.keyboardShortcuts.appendDailyNote"](): string;
    /**
      * `正文`
      */
    ["com.affine.keyboardShortcuts.bodyText"](): string;
    /**
      * `粗体`
      */
    ["com.affine.keyboardShortcuts.bold"](): string;
    /**
      * `取消`
      */
    ["com.affine.keyboardShortcuts.cancel"](): string;
    /**
      * `代码块`
      */
    ["com.affine.keyboardShortcuts.codeBlock"](): string;
    /**
      * `复制私有链接`
      */
    ["com.affine.keyboardShortcuts.copy-private-link"](): string;
    /**
      * `连接`
      */
    ["com.affine.keyboardShortcuts.connector"](): string;
    /**
      * `分割线`
      */
    ["com.affine.keyboardShortcuts.divider"](): string;
    /**
      * `展开/折叠侧边栏`
      */
    ["com.affine.keyboardShortcuts.expandOrCollapseSidebar"](): string;
    /**
      * `返回`
      */
    ["com.affine.keyboardShortcuts.goBack"](): string;
    /**
      * `前进`
      */
    ["com.affine.keyboardShortcuts.goForward"](): string;
    /**
      * `组快捷键`
      */
    ["com.affine.keyboardShortcuts.group"](): string;
    /**
      * `组数据库快捷键`
      */
    ["com.affine.keyboardShortcuts.groupDatabase"](): string;
    /**
      * `抓手快捷键`
      */
    ["com.affine.keyboardShortcuts.hand"](): string;
    /**
      * `标题 {{number}}`
      */
    ["com.affine.keyboardShortcuts.heading"](options: {
        readonly number: string;
    }): string;
    /**
      * `图像`
      */
    ["com.affine.keyboardShortcuts.image"](): string;
    /**
      * `增加缩进`
      */
    ["com.affine.keyboardShortcuts.increaseIndent"](): string;
    /**
      * `行内代码`
      */
    ["com.affine.keyboardShortcuts.inlineCode"](): string;
    /**
      * `斜体`
      */
    ["com.affine.keyboardShortcuts.italic"](): string;
    /**
      * `超链接（选定文本）`
      */
    ["com.affine.keyboardShortcuts.link"](): string;
    /**
      * `下移`
      */
    ["com.affine.keyboardShortcuts.moveDown"](): string;
    /**
      * `上移`
      */
    ["com.affine.keyboardShortcuts.moveUp"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.keyboardShortcuts.newPage"](): string;
    /**
      * `笔记快捷键`
      */
    ["com.affine.keyboardShortcuts.note"](): string;
    /**
      * `笔`
      */
    ["com.affine.keyboardShortcuts.pen"](): string;
    /**
      * `快速搜索`
      */
    ["com.affine.keyboardShortcuts.quickSearch"](): string;
    /**
      * `重做快捷键`
      */
    ["com.affine.keyboardShortcuts.redo"](): string;
    /**
      * `减少缩进`
      */
    ["com.affine.keyboardShortcuts.reduceIndent"](): string;
    /**
      * `选择`
      */
    ["com.affine.keyboardShortcuts.select"](): string;
    /**
      * `全选`
      */
    ["com.affine.keyboardShortcuts.selectAll"](): string;
    /**
      * `形状快捷键`
      */
    ["com.affine.keyboardShortcuts.shape"](): string;
    /**
      * `删除线`
      */
    ["com.affine.keyboardShortcuts.strikethrough"](): string;
    /**
      * `快速查看快捷键`
      */
    ["com.affine.keyboardShortcuts.subtitle"](): string;
    /**
      * `切换视图快捷键`
      */
    ["com.affine.keyboardShortcuts.switch"](): string;
    /**
      * `文本`
      */
    ["com.affine.keyboardShortcuts.text"](): string;
    /**
      * `键盘快捷键`
      */
    ["com.affine.keyboardShortcuts.title"](): string;
    /**
      * `取消分组`
      */
    ["com.affine.keyboardShortcuts.unGroup"](): string;
    /**
      * `下划线`
      */
    ["com.affine.keyboardShortcuts.underline"](): string;
    /**
      * `撤销`
      */
    ["com.affine.keyboardShortcuts.undo"](): string;
    /**
      * `放大`
      */
    ["com.affine.keyboardShortcuts.zoomIn"](): string;
    /**
      * `缩小`
      */
    ["com.affine.keyboardShortcuts.zoomOut"](): string;
    /**
      * `缩放至 100%`
      */
    ["com.affine.keyboardShortcuts.zoomTo100"](): string;
    /**
      * `自适应缩放`
      */
    ["com.affine.keyboardShortcuts.zoomToFit"](): string;
    /**
      * `缩放至选中元素`
      */
    ["com.affine.keyboardShortcuts.zoomToSelection"](): string;
    /**
      * `过去 30 天`
      */
    ["com.affine.last30Days"](): string;
    /**
      * `过去 7 天`
      */
    ["com.affine.last7Days"](): string;
    /**
      * `上个月`
      */
    ["com.affine.lastMonth"](): string;
    /**
      * `上周`
      */
    ["com.affine.lastWeek"](): string;
    /**
      * `去年`
      */
    ["com.affine.lastYear"](): string;
    /**
      * `加载中`
      */
    ["com.affine.loading"](): string;
    /**
      * `正在加载文档内容，请稍等片刻。`
      */
    ["com.affine.loading.description"](): string;
    /**
      * `重命名`
      */
    ["com.affine.menu.rename"](): string;
    /**
      * `找到 0 个结果`
      */
    ["com.affine.mobile.search.empty"](): string;
    /**
      * `应用版本`
      */
    ["com.affine.mobile.setting.about.appVersion"](): string;
    /**
      * `编辑器版本`
      */
    ["com.affine.mobile.setting.about.editorVersion"](): string;
    /**
      * `关于`
      */
    ["com.affine.mobile.setting.about.title"](): string;
    /**
      * `登录 / 注册`
      */
    ["com.affine.mobile.setting.account.sign-in"](): string;
    /**
      * `账户与数据`
      */
    ["com.affine.mobile.setting.account.title"](): string;
    /**
      * `字体样式`
      */
    ["com.affine.mobile.setting.appearance.font"](): string;
    /**
      * `显示语言`
      */
    ["com.affine.mobile.setting.appearance.language"](): string;
    /**
      * `配色方案`
      */
    ["com.affine.mobile.setting.appearance.theme"](): string;
    /**
      * `外观`
      */
    ["com.affine.mobile.setting.appearance.title"](): string;
    /**
      * `实验性功能`
      */
    ["com.affine.mobile.setting.experimental.features"](): string;
    /**
      * `实验室`
      */
    ["com.affine.mobile.setting.experimental.title"](): string;
    /**
      * `设置`
      */
    ["com.affine.mobile.setting.header-title"](): string;
    /**
      * `在 GitHub 为我们点亮星标`
      */
    ["com.affine.mobile.setting.others.github"](): string;
    /**
      * `Discord群组`
      */
    ["com.affine.mobile.setting.others.discord"](): string;
    /**
      * `隐私`
      */
    ["com.affine.mobile.setting.others.privacy"](): string;
    /**
      * `使用条款`
      */
    ["com.affine.mobile.setting.others.terms"](): string;
    /**
      * `隐私 & 其他`
      */
    ["com.affine.mobile.setting.others.title"](): string;
    /**
      * `官网`
      */
    ["com.affine.mobile.setting.others.website"](): string;
    /**
      * `删除账号`
      */
    ["com.affine.mobile.setting.others.delete-account"](): string;
    /**
      * `危险操作`
      */
    ["com.affine.mobile.setting.danger-zone.title"](): string;
    /**
      * `方案`
      */
    ["com.affine.mobile.setting.plans.title"](): string;
    /**
      * `云端协作或自主部署，随意选择。`
      */
    ["com.affine.mobile.setting.promo.description"](): string;
    /**
      * `团队版识光`
      */
    ["com.affine.mobile.setting.promo.title"](): string;
    /**
      * `更多云存储与进阶功能。`
      */
    ["com.affine.mobile.setting.subscription.description"](): string;
    /**
      * `识光 Pro`
      */
    ["com.affine.mobile.setting.subscription.title"](): string;
    /**
      * `邀请好友`
      */
    ["com.affine.mobile.setting.support.invite"](): string;
    /**
      * `来试试识光——笔记、白板、文档与 AI 一气呵成。`
      */
    ["com.affine.mobile.setting.support.invite-message"](): string;
    /**
      * `为识光评分`
      */
    ["com.affine.mobile.setting.support.rate"](): string;
    /**
      * `支持我们`
      */
    ["com.affine.mobile.setting.support.title"](): string;
    /**
      * `想要将数据保留在本地吗？`
      */
    ["com.affine.mobile.sign-in.skip.hint"](): string;
    /**
      * `略过登录直接启动识光`
      */
    ["com.affine.mobile.sign-in.skip.link"](): string;
    /**
      * `超过30天`
      */
    ["com.affine.moreThan30Days"](): string;
    /**
      * `取消`
      */
    ["com.affine.moveToTrash.confirmModal.cancel"](): string;
    /**
      * `删除`
      */
    ["com.affine.moveToTrash.confirmModal.confirm"](): string;
    /**
      * `{{title}} 将被移动到回收站`
      */
    ["com.affine.moveToTrash.confirmModal.description"](options: {
        readonly title: string;
    }): string;
    /**
      * `{{ number }} 篇文档将移至回收站`
      */
    ["com.affine.moveToTrash.confirmModal.description.multiple"](options: {
        readonly number: string;
    }): string;
    /**
      * `确定要删除文档？`
      */
    ["com.affine.moveToTrash.confirmModal.title"](): string;
    /**
      * `确认删除 {{ number }} 篇文档吗？`
      */
    ["com.affine.moveToTrash.confirmModal.title.multiple"](options: {
        readonly number: string;
    }): string;
    /**
      * `移动到回收站`
      */
    ["com.affine.moveToTrash.title"](): string;
    /**
      * `新建标签页`
      */
    ["com.affine.multi-tab.new-tab"](): string;
    /**
      * `识光 同步可以帮你备份数据、跨设备使用，也支持多人协作和内容发布。`
      */
    ["com.affine.nameWorkspace.affine-cloud.description"](): string;
    /**
      * `使用 识光 同步跨设备同步`
      */
    ["com.affine.nameWorkspace.affine-cloud.title"](): string;
    /**
      * `网页版工作区保存在当前浏览器中。磁盘空间不足时，浏览器可能会自动移除它。如需完全本地保存，可以下载桌面客户端。`
      */
    ["com.affine.nameWorkspace.affine-cloud.web-tips"](): string;
    /**
      * `取消`
      */
    ["com.affine.nameWorkspace.button.cancel"](): string;
    /**
      * `创建`
      */
    ["com.affine.nameWorkspace.button.create"](): string;
    /**
      * `工作区是为个人和团队进行引用、创建和规划的虚拟空间。`
      */
    ["com.affine.nameWorkspace.description"](): string;
    /**
      * `设置工作区名称`
      */
    ["com.affine.nameWorkspace.placeholder"](): string;
    /**
      * `工作区名称`
      */
    ["com.affine.nameWorkspace.subtitle.workspace-name"](): string;
    /**
      * `工作区类型`
      */
    ["com.affine.nameWorkspace.subtitle.workspace-type"](): string;
    /**
      * `命名您的工作区`
      */
    ["com.affine.nameWorkspace.title"](): string;
    /**
      * `创建新的页面`
      */
    ["com.affine.new.page-mode"](): string;
    /**
      * `新的无界页面`
      */
    ["com.affine.new_edgeless"](): string;
    /**
      * `导入`
      */
    ["com.affine.new_import"](): string;
    /**
      * `下星期`
      */
    ["com.affine.nextWeek"](): string;
    /**
      * `返回首页`
      */
    ["com.affine.notFoundPage.backButton"](): string;
    /**
      * `404 - 页面未找到`
      */
    ["com.affine.notFoundPage.title"](): string;
    /**
      * `识光 社区`
      */
    ["com.affine.other-page.nav.affine-community"](): string;
    /**
      * `博客`
      */
    ["com.affine.other-page.nav.blog"](): string;
    /**
      * `联系我们`
      */
    ["com.affine.other-page.nav.contact-us"](): string;
    /**
      * `下载应用`
      */
    ["com.affine.other-page.nav.download-app"](): string;
    /**
      * `官方网站`
      */
    ["com.affine.other-page.nav.official-website"](): string;
    /**
      * `打开 识光`
      */
    ["com.affine.other-page.nav.open-affine"](): string;
    /**
      * `添加链接文档`
      */
    ["com.affine.page-operation.add-linked-page"](): string;
    /**
      * `还有 {{ count }} 个属性`
      */
    ["com.affine.page-properties.more-property.more"](options: {
        readonly count: string;
    }): string;
    /**
      * `还有 {{ count }} 个属性`
      */
    ["com.affine.page-properties.more-property.one"](options: {
        readonly count: string;
    }): string;
    /**
      * `隐藏了 {{ count }} 个属性`
      */
    ["com.affine.page-properties.hide-property.one"](options: {
        readonly count: string;
    }): string;
    /**
      * `隐藏了 {{ count }} 个属性`
      */
    ["com.affine.page-properties.hide-property.more"](options: {
        readonly count: string;
    }): string;
    /**
      * `添加属性`
      */
    ["com.affine.page-properties.add-property"](): string;
    /**
      * `创建属性`
      */
    ["com.affine.page-properties.add-property.menu.create"](): string;
    /**
      * `属性`
      */
    ["com.affine.page-properties.add-property.menu.header"](): string;
    /**
      * `编辑属性`
      */
    ["com.affine.page-properties.config-properties"](): string;
    /**
      * `反向链接`
      */
    ["com.affine.page-properties.backlinks"](): string;
    /**
      * `类型`
      */
    ["com.affine.page-properties.create-property.menu.header"](): string;
    /**
      * `已添加`
      */
    ["com.affine.page-properties.create-property.added"](): string;
    /**
      * `图标`
      */
    ["com.affine.page-properties.icons"](): string;
    /**
      * `本地用户`
      */
    ["com.affine.page-properties.local-user"](): string;
    /**
      * `外链`
      */
    ["com.affine.page-properties.outgoing-links"](): string;
    /**
      * `信息`
      */
    ["com.affine.page-properties.page-info"](): string;
    /**
      * `查看信息`
      */
    ["com.affine.page-properties.page-info.view"](): string;
    /**
      * `暂无记录`
      */
    ["com.affine.page-properties.property-user-avatar-no-record"](): string;
    /**
      * `本地用户`
      */
    ["com.affine.page-properties.property-user-local"](): string;
    /**
      * `属性为空`
      */
    ["com.affine.page-properties.property-value-placeholder"](): string;
    /**
      * `始终隐藏`
      */
    ["com.affine.page-properties.property.always-hide"](): string;
    /**
      * `始终显示`
      */
    ["com.affine.page-properties.property.always-show"](): string;
    /**
      * `复选框`
      */
    ["com.affine.page-properties.property.checkbox"](): string;
    /**
      * `创建者`
      */
    ["com.affine.page-properties.property.createdBy"](): string;
    /**
      * `日期`
      */
    ["com.affine.page-properties.property.date"](): string;
    /**
      * `在视图中隐藏`
      */
    ["com.affine.page-properties.property.hide-in-view"](): string;
    /**
      * `当属性为空时在视图中隐藏`
      */
    ["com.affine.page-properties.property.hide-in-view-when-empty"](): string;
    /**
      * `当属性为空时隐藏`
      */
    ["com.affine.page-properties.property.hide-when-empty"](): string;
    /**
      * `数字`
      */
    ["com.affine.page-properties.property.number"](): string;
    /**
      * `进程`
      */
    ["com.affine.page-properties.property.progress"](): string;
    /**
      * `删除属性`
      */
    ["com.affine.page-properties.property.remove-property"](): string;
    /**
      * `必选`
      */
    ["com.affine.page-properties.property.required"](): string;
    /**
      * `在视图中显示`
      */
    ["com.affine.page-properties.property.show-in-view"](): string;
    /**
      * `标签`
      */
    ["com.affine.page-properties.property.tags"](): string;
    /**
      * `文档模式`
      */
    ["com.affine.page-properties.property.docPrimaryMode"](): string;
    /**
      * `文本`
      */
    ["com.affine.page-properties.property.text"](): string;
    /**
      * `Journal`
      */
    ["com.affine.page-properties.property.journal"](): string;
    /**
      * `重复`
      */
    ["com.affine.page-properties.property.journal-duplicated"](): string;
    /**
      * `移除 Journal 标签`
      */
    ["com.affine.page-properties.property.journal-remove"](): string;
    /**
      * `最后编辑者`
      */
    ["com.affine.page-properties.property.updatedBy"](): string;
    /**
      * `创建时间`
      */
    ["com.affine.page-properties.property.createdAt"](): string;
    /**
      * `更新时间`
      */
    ["com.affine.page-properties.property.updatedAt"](): string;
    /**
      * `无界配色方案`
      */
    ["com.affine.page-properties.property.edgelessTheme"](): string;
    /**
      * `页面宽度`
      */
    ["com.affine.page-properties.property.pageWidth"](): string;
    /**
      * `模板`
      */
    ["com.affine.page-properties.property.template"](): string;
    /**
      * `为文档添加相关标识或类别，有助于组织内容、提高搜索效率并将相关文档归类。`
      */
    ["com.affine.page-properties.property.tags.tooltips"](): string;
    /**
      * `标识此文档为日志条目或日记，方便捕捉灵感、快速记录或自我反省。`
      */
    ["com.affine.page-properties.property.journal.tooltips"](): string;
    /**
      * `用于标记该条目完成与否，适合确认选项、切换功能或跟踪任务状态。`
      */
    ["com.affine.page-properties.property.checkbox.tooltips"](): string;
    /**
      * `选择或显示特定日期，适用于安排计划、设定截止日期或记录重要事件。`
      */
    ["com.affine.page-properties.property.date.tooltips"](): string;
    /**
      * `上传和管理图片，用于展示视觉内容、插图或创建画廊。`
      */
    ["com.affine.page-properties.property.image.tooltips"](): string;
    /**
      * `可选择多个选项，适合分类、数据筛选或管理标签。`
      */
    ["com.affine.page-properties.property.multiSelect.tooltips"](): string;
    /**
      * `输入数值，用于数量、测量或排名。`
      */
    ["com.affine.page-properties.property.number.tooltips"](): string;
    /**
      * `设置0到100之间的进度值，适合跟踪完成度、可视化进展或管理目标。`
      */
    ["com.affine.page-properties.property.progress.tooltips"](): string;
    /**
      * `选择一个选项，适用于单项选择、分类或决策。`
      */
    ["com.affine.page-properties.property.select.tooltips"](): string;
    /**
      * `输入网站或 识光 文档链接，用于连接资源或引用内部文档。`
      */
    ["com.affine.page-properties.property.link.tooltips"](): string;
    /**
      * `输入文字，用于描述、评论或记录笔记。`
      */
    ["com.affine.page-properties.property.text.tooltips"](): string;
    /**
      * `显示当前文档的作者，用于跟踪所有权和协作情况。`
      */
    ["com.affine.page-properties.property.createdBy.tooltips"](): string;
    /**
      * `显示文档的最后编辑者，方便跟踪最新更改。`
      */
    ["com.affine.page-properties.property.updatedBy.tooltips"](): string;
    /**
      * `记录最后修改的时间戳。用于跟踪变更、识别最近的更新或监测内容的新鲜度。`
      */
    ["com.affine.page-properties.property.updatedAt.tooltips"](): string;
    /**
      * `跟踪文档首次创建的时间。用于维护记录历史、按创建日期排序或按时间顺序审核内容。`
      */
    ["com.affine.page-properties.property.createdAt.tooltips"](): string;
    /**
      * `选择页面模式、无边界模式或自动模式，适合根据内容选择最佳显示方式。`
      */
    ["com.affine.page-properties.property.docPrimaryMode.tooltips"](): string;
    /**
      * `选择浅色、深色或系统主题，精确控制内容的查看样式。`
      */
    ["com.affine.page-properties.property.edgelessTheme.tooltips"](): string;
    /**
      * `控制此页面的宽度以适合内容显示需要。`
      */
    ["com.affine.page-properties.property.pageWidth.tooltips"](): string;
    /**
      * `将此文档标记为模板，可用于创建新文档。`
      */
    ["com.affine.page-properties.property.template.tooltips"](): string;
    /**
      * `由 {{userName}} 创建`
      */
    ["com.affine.page-properties.property.createdBy.tip"](options: {
        readonly userName: string;
    }): string;
    /**
      * `最后由 {{userName}} 编辑`
      */
    ["com.affine.page-properties.property.updatedBy.tip"](options: {
        readonly userName: string;
    }): string;
    /**
      * `属性`
      */
    ["com.affine.propertySidebar.property-list.section"](): string;
    /**
      * `添加更多属性`
      */
    ["com.affine.propertySidebar.add-more.section"](): string;
    /**
      * `自定义属性`
      */
    ["com.affine.page-properties.settings.title"](): string;
    /**
      * `打开标签页面`
      */
    ["com.affine.page-properties.tags.open-tags-page"](): string;
    /**
      * `选择或者创建一个标签`
      */
    ["com.affine.page-properties.tags.selector-header-title"](): string;
    /**
      * `显示`
      */
    ["com.affine.page.display"](): string;
    /**
      * `显示属性`
      */
    ["com.affine.page.display.display-properties"](): string;
    /**
      * `内容预览`
      */
    ["com.affine.page.display.display-properties.body-notes"](): string;
    /**
      * `分组`
      */
    ["com.affine.page.display.grouping"](): string;
    /**
      * `收藏`
      */
    ["com.affine.page.display.grouping.group-by-favourites"](): string;
    /**
      * `标签`
      */
    ["com.affine.page.display.grouping.group-by-tag"](): string;
    /**
      * `未有标签`
      */
    ["com.affine.page.display.grouping.group-by-tag.untagged"](): string;
    /**
      * `不分组`
      */
    ["com.affine.page.display.grouping.no-grouping"](): string;
    /**
      * `选项列表`
      */
    ["com.affine.page.display.list-option"](): string;
    /**
      * `清除选择`
      */
    ["com.affine.page.group-header.clear"](): string;
    /**
      * `已收藏`
      */
    ["com.affine.page.group-header.favourited"](): string;
    /**
      * `未收藏`
      */
    ["com.affine.page.group-header.not-favourited"](): string;
    /**
      * `全选`
      */
    ["com.affine.page.group-header.select-all"](): string;
    /**
      * `由 {{name}} 创建`
      */
    ["com.affine.page.toolbar.created_by"](options: {
        readonly name: string;
    }): string;
    /**
      * `文档模式`
      */
    ["com.affine.pageMode"](): string;
    /**
      * `全部`
      */
    ["com.affine.pageMode.all"](): string;
    /**
      * `无界`
      */
    ["com.affine.pageMode.edgeless"](): string;
    /**
      * `页面`
      */
    ["com.affine.pageMode.page"](): string;
    /**
      * `恭喜您成功购买 识光 AI！现在，您可以直接在 识光 AI 中精炼内容、生成图像并制作全面的思维导图，从而显着提高您的工作效率。`
      */
    ["com.affine.payment.ai-upgrade-success-page.text"](): string;
    /**
      * `购买成功！`
      */
    ["com.affine.payment.ai-upgrade-success-page.title"](): string;
    /**
      * `取消订阅`
      */
    ["com.affine.payment.ai.action.cancel.button-label"](): string;
    /**
      * `保留 识光 AI`
      */
    ["com.affine.payment.ai.action.cancel.confirm.cancel-text"](): string;
    /**
      * `取消订阅`
      */
    ["com.affine.payment.ai.action.cancel.confirm.confirm-text"](): string;
    /**
      * `如果您现在终止订阅，则在此计费周期结束之前您仍然可以使用 识光 AI。`
      */
    ["com.affine.payment.ai.action.cancel.confirm.description"](): string;
    /**
      * `取消订阅`
      */
    ["com.affine.payment.ai.action.cancel.confirm.title"](): string;
    /**
      * `登录`
      */
    ["com.affine.payment.ai.action.login.button-label"](): string;
    /**
      * `恢复`
      */
    ["com.affine.payment.ai.action.resume.button-label"](): string;
    /**
      * `取消`
      */
    ["com.affine.payment.ai.action.resume.confirm.cancel-text"](): string;
    /**
      * `确认`
      */
    ["com.affine.payment.ai.action.resume.confirm.confirm-text"](): string;
    /**
      * `您确定要恢复 识光 AI 的订阅吗？这意味着您的付款方式将在每个计费周期结束时自动扣费，从下一个计费周期开始。`
      */
    ["com.affine.payment.ai.action.resume.confirm.description"](): string;
    /**
      * `我们将在下一个计费周期向您收费。`
      */
    ["com.affine.payment.ai.action.resume.confirm.notify.msg"](): string;
    /**
      * `订阅已更新`
      */
    ["com.affine.payment.ai.action.resume.confirm.notify.title"](): string;
    /**
      * `恢复自动续费？`
      */
    ["com.affine.payment.ai.action.resume.confirm.title"](): string;
    /**
      * `与您一起写作`
      */
    ["com.affine.payment.ai.benefit.g1"](): string;
    /**
      * `根据您需要的主题创建从句子到文章的优质内容`
      */
    ["com.affine.payment.ai.benefit.g1-1"](): string;
    /**
      * `像专业人士一样进行改写`
      */
    ["com.affine.payment.ai.benefit.g1-2"](): string;
    /**
      * `切换语气 / 修复拼写和语法`
      */
    ["com.affine.payment.ai.benefit.g1-3"](): string;
    /**
      * `与您一起画画`
      */
    ["com.affine.payment.ai.benefit.g2"](): string;
    /**
      * `魔幻般地描绘您的思维`
      */
    ["com.affine.payment.ai.benefit.g2-1"](): string;
    /**
      * `将您的大纲转化为美丽而吸引人的演示文稿`
      */
    ["com.affine.payment.ai.benefit.g2-2"](): string;
    /**
      * `将您的内容总结为结构化的思维导图`
      */
    ["com.affine.payment.ai.benefit.g2-3"](): string;
    /**
      * `与您一起规划`
      */
    ["com.affine.payment.ai.benefit.g3"](): string;
    /**
      * `记忆并整理您的知识`
      */
    ["com.affine.payment.ai.benefit.g3-1"](): string;
    /**
      * `自动排序和自动标记`
      */
    ["com.affine.payment.ai.benefit.g3-2"](): string;
    /**
      * `开源和隐私保证`
      */
    ["com.affine.payment.ai.benefit.g3-3"](): string;
    /**
      * `您已购买 识光 AI。到期日期为{{end}}。`
      */
    ["com.affine.payment.ai.billing-tip.end-at"](options: {
        readonly end: string;
    }): string;
    /**
      * `您已购买 识光 AI。下一次付款日期是 {{due}}。`
      */
    ["com.affine.payment.ai.billing-tip.next-bill-at"](options: {
        readonly due: string;
    }): string;
    /**
      * `您此次付款失败，下一次付款时间是 {{due}}。`
      */
    ["com.affine.payment.billing-tip.past-due"](options: {
        readonly due: string;
    }): string;
    /**
      * `您当前处于 Free 计划。`
      */
    ["com.affine.payment.ai.pricing-plan.caption-free"](): string;
    /**
      * `您已购买 识光 AI`
      */
    ["com.affine.payment.ai.pricing-plan.caption-purchased"](): string;
    /**
      * `了解 识光 AI`
      */
    ["com.affine.payment.ai.pricing-plan.learn"](): string;
    /**
      * `识光 AI`
      */
    ["com.affine.payment.ai.pricing-plan.title"](): string;
    /**
      * `将您的所有想法变成现实`
      */
    ["com.affine.payment.ai.pricing-plan.title-caption-1"](): string;
    /**
      * `真正的多模态 AI copilot。`
      */
    ["com.affine.payment.ai.pricing-plan.title-caption-2"](): string;
    /**
      * `按年计费`
      */
    ["com.affine.payment.ai.subscribe.billed-annually"](): string;
    /**
      * `您已购买 识光 AI。`
      */
    ["com.affine.payment.ai.usage-description-purchased"](): string;
    /**
      * `识光 AI 用量`
      */
    ["com.affine.payment.ai.usage-title"](): string;
    /**
      * `更改计划`
      */
    ["com.affine.payment.ai.usage.change-button-label"](): string;
    /**
      * `购买`
      */
    ["com.affine.payment.ai.usage.purchase-button-label"](): string;
    /**
      * `使用次数`
      */
    ["com.affine.payment.ai.usage.used-caption"](): string;
    /**
      * `{{used}}/{{limit}} 次数`
      */
    ["com.affine.payment.ai.usage.used-detail"](options: Readonly<{
        used: string;
        limit: string;
    }>): string;
    /**
      * `激活`
      */
    ["com.affine.payment.subscription-status.active"](): string;
    /**
      * `逾期账单`
      */
    ["com.affine.payment.subscription-status.past-due"](): string;
    /**
      * `试用`
      */
    ["com.affine.payment.subscription-status.trialing"](): string;
    /**
      * `无限制的本地工作区`
      */
    ["com.affine.payment.benefit-1"](): string;
    /**
      * `无限制的登录设备`
      */
    ["com.affine.payment.benefit-2"](): string;
    /**
      * `无限制的区块`
      */
    ["com.affine.payment.benefit-3"](): string;
    /**
      * `{{capacity}} 的云存储`
      */
    ["com.affine.payment.benefit-4"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `{{capacity}} 的最大文件大小`
      */
    ["com.affine.payment.benefit-5"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `每个工作区的成员数量 ≤ {{capacity}}`
      */
    ["com.affine.payment.benefit-6"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `{{capacity}} 日的历史版本记录`
      */
    ["com.affine.payment.benefit-7"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `识光 AI`
      */
    ["com.affine.payment.billing-setting.ai-plan"](): string;
    /**
      * `购买`
      */
    ["com.affine.payment.billing-setting.ai.purchase"](): string;
    /**
      * `开始免费试用`
      */
    ["com.affine.payment.billing-setting.ai.start-free-trial"](): string;
    /**
      * `一次性支付`
      */
    ["com.affine.payment.billing-setting.believer.price-caption"](): string;
    /**
      * `识光 Cloud`
      */
    ["com.affine.payment.billing-setting.believer.title"](): string;
    /**
      * `取消订阅`
      */
    ["com.affine.payment.billing-setting.cancel-subscription"](): string;
    /**
      * `一旦您取消订阅，您将不再享受该计划的福利。`
      */
    ["com.affine.payment.billing-setting.cancel-subscription.description"](): string;
    /**
      * `更改计划`
      */
    ["com.affine.payment.billing-setting.change-plan"](): string;
    /**
      * `识光 Cloud`
      */
    ["com.affine.payment.billing-setting.current-plan"](): string;
    /**
      * `到期日期`
      */
    ["com.affine.payment.billing-setting.expiration-date"](): string;
    /**
      * `您的订阅有效期至 {{expirationDate}}`
      */
    ["com.affine.payment.billing-setting.expiration-date.description"](options: {
        readonly expirationDate: string;
    }): string;
    /**
      * `计费历史`
      */
    ["com.affine.payment.billing-setting.history"](): string;
    /**
      * `信息`
      */
    ["com.affine.payment.billing-setting.information"](): string;
    /**
      * `月`
      */
    ["com.affine.payment.billing-setting.month"](): string;
    /**
      * `没有要显示的发票。`
      */
    ["com.affine.payment.billing-setting.no-invoice"](): string;
    /**
      * `已支付`
      */
    ["com.affine.payment.billing-setting.paid"](): string;
    /**
      * `支付方式`
      */
    ["com.affine.payment.billing-setting.payment-method"](): string;
    /**
      * `由Stripe提供。`
      */
    ["com.affine.payment.billing-setting.payment-method.description"](): string;
    /**
      * `前往`
      */
    ["com.affine.payment.billing-setting.payment-method.go"](): string;
    /**
      * `续费日期`
      */
    ["com.affine.payment.billing-setting.renew-date"](): string;
    /**
      * `下次计费日期: {{renewDate}}`
      */
    ["com.affine.payment.billing-setting.renew-date.description"](options: {
        readonly renewDate: string;
    }): string;
    /**
      * `到期日期`
      */
    ["com.affine.payment.billing-setting.due-date"](): string;
    /**
      * `你的订阅将于 {{dueDate}} 到期`
      */
    ["com.affine.payment.billing-setting.due-date.description"](options: {
        readonly dueDate: string;
    }): string;
    /**
      * `恢复`
      */
    ["com.affine.payment.billing-setting.resume-subscription"](): string;
    /**
      * `管理您的计费信息和发票。`
      */
    ["com.affine.payment.billing-setting.subtitle"](): string;
    /**
      * `计费`
      */
    ["com.affine.payment.billing-setting.title"](): string;
    /**
      * `更新`
      */
    ["com.affine.payment.billing-setting.update"](): string;
    /**
      * `升级`
      */
    ["com.affine.payment.billing-setting.upgrade"](): string;
    /**
      * `查看发票`
      */
    ["com.affine.payment.billing-setting.view-invoice"](): string;
    /**
      * `年`
      */
    ["com.affine.payment.billing-setting.year"](): string;
    /**
      * `请告诉我们更多关于您的使用案例，以使 识光 变得更好。`
      */
    ["com.affine.payment.billing-type-form.description"](): string;
    /**
      * `前往`
      */
    ["com.affine.payment.billing-type-form.go"](): string;
    /**
      * `请告诉我们您的使用案例`
      */
    ["com.affine.payment.billing-type-form.title"](): string;
    /**
      * `您已达到存储极限`
      */
    ["com.affine.payment.blob-limit.title"](): string;
    /**
      * `预订 Demo`
      */
    ["com.affine.payment.book-a-demo"](): string;
    /**
      * `购买专业版`
      */
    ["com.affine.payment.buy-pro"](): string;
    /**
      * `切换到 {{to}} 计费`
      */
    ["com.affine.payment.change-to"](options: {
        readonly to: string;
    }): string;
    /**
      * `包含在 FOSS`
      */
    ["com.affine.payment.cloud.free.benefit.g1"](): string;
    /**
      * `无限制的本地工作区`
      */
    ["com.affine.payment.cloud.free.benefit.g1-1"](): string;
    /**
      * `无限制地使用和定制`
      */
    ["com.affine.payment.cloud.free.benefit.g1-2"](): string;
    /**
      * `无限制地编辑文档和无界`
      */
    ["com.affine.payment.cloud.free.benefit.g1-3"](): string;
    /**
      * `包含在 Basic`
      */
    ["com.affine.payment.cloud.free.benefit.g2"](): string;
    /**
      * `10GB 的云存储。`
      */
    ["com.affine.payment.cloud.free.benefit.g2-1"](): string;
    /**
      * `10MB 的最大文件大小。`
      */
    ["com.affine.payment.cloud.free.benefit.g2-2"](): string;
    /**
      * `每个工作区最多 3 名成员。`
      */
    ["com.affine.payment.cloud.free.benefit.g2-3"](): string;
    /**
      * `7 天 Cloud Time Machine 文件版本历史记录。`
      */
    ["com.affine.payment.cloud.free.benefit.g2-4"](): string;
    /**
      * `最多 3 个登录设备。`
      */
    ["com.affine.payment.cloud.free.benefit.g2-5"](): string;
    /**
      * `MIT 许可本地编辑器。`
      */
    ["com.affine.payment.cloud.free.description"](): string;
    /**
      * `本地 FOSS + 云基础`
      */
    ["com.affine.payment.cloud.free.name"](): string;
    /**
      * `永远免费`
      */
    ["com.affine.payment.cloud.free.title"](): string;
    /**
      * `包括在 Pro 计划中`
      */
    ["com.affine.payment.cloud.onetime.included"](): string;
    /**
      * `包含在 Believer 计划`
      */
    ["com.affine.payment.cloud.lifetime.included"](): string;
    /**
      * `由我们托管，无需任何技术设置。`
      */
    ["com.affine.payment.cloud.pricing-plan.select.caption"](): string;
    /**
      * `由 识光.Pro 托管`
      */
    ["com.affine.payment.cloud.pricing-plan.select.title"](): string;
    /**
      * `按年计费`
      */
    ["com.affine.payment.cloud.pricing-plan.toggle-billed-yearly"](): string;
    /**
      * `立省 {{discount}}%`
      */
    ["com.affine.payment.cloud.pricing-plan.toggle-discount"](options: {
        readonly discount: string;
    }): string;
    /**
      * `年付`
      */
    ["com.affine.payment.cloud.pricing-plan.toggle-yearly"](): string;
    /**
      * `包含在 Pro`
      */
    ["com.affine.payment.cloud.pro.benefit.g1"](): string;
    /**
      * `识光 FOSS & Basic 中的所有权益。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-1"](): string;
    /**
      * `100GB 的云存储。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-2"](): string;
    /**
      * `100MB 的最大文件大小。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-3"](): string;
    /**
      * `每个工作区最多 10 名成员。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-4"](): string;
    /**
      * `30 天 Cloud Time Machine 文件版本历史记录。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-5"](): string;
    /**
      * `在文档和无界中添加评论。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-6"](): string;
    /**
      * `社区支持。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-7"](): string;
    /**
      * `为更多人提供实时同步和协作。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-8"](): string;
    /**
      * `文档细粒度权限控制。`
      */
    ["com.affine.payment.cloud.pro.benefit.g1-9"](): string;
    /**
      * `为了家庭或者小型团队。`
      */
    ["com.affine.payment.cloud.pro.description"](): string;
    /**
      * `Pro`
      */
    ["com.affine.payment.cloud.pro.name"](): string;
    /**
      * `按年计费`
      */
    ["com.affine.payment.cloud.pro.title.billed-yearly"](): string;
    /**
      * `{{price}} 每月`
      */
    ["com.affine.payment.cloud.pro.title.price-monthly"](options: {
        readonly price: string;
    }): string;
    /**
      * `包含在团队工作区中`
      */
    ["com.affine.payment.cloud.team-workspace.benefit.g1"](): string;
    /**
      * `识光 Pro 中的所有权益。`
      */
    ["com.affine.payment.cloud.team-workspace.benefit.g1-1"](): string;
    /**
      * `100 GB 初始存储空间 + 20 GB / 每人。`
      */
    ["com.affine.payment.cloud.team-workspace.benefit.g1-2"](): string;
    /**
      * `最大文件尺寸限制为500MB。`
      */
    ["com.affine.payment.cloud.team-workspace.benefit.g1-3"](): string;
    /**
      * `无限团队成员（10+席位）。`
      */
    ["com.affine.payment.cloud.team-workspace.benefit.g1-4"](): string;
    /**
      * `多管理员。`
      */
    ["com.affine.payment.cloud.team-workspace.benefit.g1-5"](): string;
    /**
      * `优先客户支持。`
      */
    ["com.affine.payment.cloud.team-workspace.benefit.g1-6"](): string;
    /**
      * `最适合扩展中的团队。`
      */
    ["com.affine.payment.cloud.team-workspace.description"](): string;
    /**
      * `团队`
      */
    ["com.affine.payment.cloud.team-workspace.name"](): string;
    /**
      * `按年计费`
      */
    ["com.affine.payment.cloud.team-workspace.title.billed-yearly"](): string;
    /**
      * `月付 {{price}} / 每人`
      */
    ["com.affine.payment.cloud.team-workspace.title.price-monthly"](options: {
        readonly price: string;
    }): string;
    /**
      * `联系销售`
      */
    ["com.affine.payment.contact-sales"](): string;
    /**
      * `当前计划`
      */
    ["com.affine.payment.current-plan"](): string;
    /**
      * `开始 14 天免费试用`
      */
    ["com.affine.payment.start-free-trial"](): string;
    /**
      * `{{amount}}% 折扣`
      */
    ["com.affine.payment.discount-amount"](options: {
        readonly amount: string;
    }): string;
    /**
      * `降级`
      */
    ["com.affine.payment.downgrade"](): string;
    /**
      * `我们希望听到更多关于我们不足之处的意见，这可以让 识光 变得更好。`
      */
    ["com.affine.payment.downgraded-notify.content"](): string;
    /**
      * `稍后`
      */
    ["com.affine.payment.downgraded-notify.later"](): string;
    /**
      * `好的，在浏览器中打开`
      */
    ["com.affine.payment.downgraded-notify.ok-client"](): string;
    /**
      * `好的，在新标签页打开`
      */
    ["com.affine.payment.downgraded-notify.ok-web"](): string;
    /**
      * `很遗憾看见您离开`
      */
    ["com.affine.payment.downgraded-notify.title"](): string;
    /**
      * `您已成功降级。当前计费周期结束后，您的账户将自动切换到免费计划。`
      */
    ["com.affine.payment.downgraded-tooltip"](): string;
    /**
      * `最佳团队协作和知识提炼工作区。`
      */
    ["com.affine.payment.dynamic-benefit-1"](): string;
    /**
      * `专注于真正重要的事情，用团队项目管理和自动化。`
      */
    ["com.affine.payment.dynamic-benefit-2"](): string;
    /**
      * `按座位付费，适应所有团队规模。`
      */
    ["com.affine.payment.dynamic-benefit-3"](): string;
    /**
      * `针对专门需求的解决方案和最佳实践。`
      */
    ["com.affine.payment.dynamic-benefit-4"](): string;
    /**
      * `嵌入式与IT支持的询问。`
      */
    ["com.affine.payment.dynamic-benefit-5"](): string;
    /**
      * `识光 Pro 中的所有权益`
      */
    ["com.affine.payment.lifetime.benefit-1"](): string;
    /**
      * `终身个人使用`
      */
    ["com.affine.payment.lifetime.benefit-2"](): string;
    /**
      * `{{capacity}} 云存储`
      */
    ["com.affine.payment.lifetime.benefit-3"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `识光 团队专属 Discord 支持`
      */
    ["com.affine.payment.lifetime.benefit-4"](): string;
    /**
      * `成为终身支持者？`
      */
    ["com.affine.payment.lifetime.caption-1"](): string;
    /**
      * `购买`
      */
    ["com.affine.payment.lifetime.purchase"](): string;
    /**
      * `已购买`
      */
    ["com.affine.payment.lifetime.purchased"](): string;
    /**
      * `Believer 计划`
      */
    ["com.affine.payment.lifetime.title"](): string;
    /**
      * `升级`
      */
    ["com.affine.payment.member-limit.free.confirm"](): string;
    /**
      * `由 {{planName}} 用户创建的工作区限制至多 {{quota}} 名成员。如需添加更多协作者，您可以：`
      */
    ["com.affine.payment.member-limit.description"](options: Readonly<{
        planName: string;
        quota: string;
    }>): string;
    /**
      * `升级至 识光 Pro 以扩大会员容量`
      */
    ["com.affine.payment.member-limit.description.tips-for-free-plan"](): string;
    /**
      * `转换为团队空间以实现无限协作`
      */
    ["com.affine.payment.member-limit.description.tips-1"](): string;
    /**
      * `或创建一个新的工作区`
      */
    ["com.affine.payment.member-limit.description.tips-2"](): string;
    /**
      * `知道了`
      */
    ["com.affine.payment.member-limit.pro.confirm"](): string;
    /**
      * `成员数量已达到极限`
      */
    ["com.affine.payment.member-limit.title"](): string;
    /**
      * `在此处管理成员。{{planName}} 用户可以邀请最多 {{memberLimit}} 人`
      */
    ["com.affine.payment.member.description"](options: Readonly<{
        planName: string;
        memberLimit: string;
    }>): string;
    /**
      * `选择您的计划`
      */
    ["com.affine.payment.member.description.choose-plan"](): string;
    /**
      * `前往升级`
      */
    ["com.affine.payment.member.description.go-upgrade"](): string;
    /**
      * `你想与更多的人进行合作吗？`
      */
    ["com.affine.payment.member.description2"](): string;
    /**
      * `与不限人数的团队成员一起工作。`
      */
    ["com.affine.payment.member.team.description"](): string;
    /**
      * `邀请团队成员`
      */
    ["com.affine.payment.member.team.invite.title"](): string;
    /**
      * `通过邮件或分享链接来邀请新成员加入您的工作区`
      */
    ["com.affine.payment.member.team.invite.description"](): string;
    /**
      * `邮件邀请`
      */
    ["com.affine.payment.member.team.invite.email-invite"](): string;
    /**
      * `邀请链接`
      */
    ["com.affine.payment.member.team.invite.invite-link"](): string;
    /**
      * `邮件地址`
      */
    ["com.affine.payment.member.team.invite.email-addresses"](): string;
    /**
      * `输入邮件地址（以逗号分隔）`
      */
    ["com.affine.payment.member.team.invite.email-placeholder"](): string;
    /**
      * `导入CSV`
      */
    ["com.affine.payment.member.team.invite.import-csv"](): string;
    /**
      * `发送邀请`
      */
    ["com.affine.payment.member.team.invite.send-invites"](): string;
    /**
      * `链接已过期`
      */
    ["com.affine.payment.member.team.invite.link-expiration"](): string;
    /**
      * `{{number}} 天`
      */
    ["com.affine.payment.member.team.invite.expiration-date"](options: {
        readonly number: string;
    }): string;
    /**
      * `超时时间为: {{expireTime}}`
      */
    ["com.affine.payment.member.team.invite.expire-at"](options: {
        readonly expireTime: string;
    }): string;
    /**
      * `邀请链接`
      */
    ["com.affine.payment.member.team.invite.invitation-link"](): string;
    /**
      * `生成链接以邀请成员加入您的工作区`
      */
    ["com.affine.payment.member.team.invite.invitation-link.description"](): string;
    /**
      * `生成`
      */
    ["com.affine.payment.member.team.invite.generate"](): string;
    /**
      * `复制`
      */
    ["com.affine.payment.member.team.invite.copy"](): string;
    /**
      * `完成`
      */
    ["com.affine.payment.member.team.invite.done"](): string;
    /**
      * `邀请已发送 {{count}} 条`
      */
    ["com.affine.payment.member.team.invite.notify.title"](options: {
        readonly count: string;
    }): string;
    /**
      * `这些电子邮件地址已被邀请：`
      */
    ["com.affine.payment.member.team.invite.notify.fail-message"](): string;
    /**
      * `撤回邀请`
      */
    ["com.affine.payment.member.team.revoke"](): string;
    /**
      * `批准`
      */
    ["com.affine.payment.member.team.approve"](): string;
    /**
      * `拒绝`
      */
    ["com.affine.payment.member.team.decline"](): string;
    /**
      * `移除成员`
      */
    ["com.affine.payment.member.team.remove"](): string;
    /**
      * `重试付款`
      */
    ["com.affine.payment.member.team.retry-payment"](): string;
    /**
      * `将角色更改为管理员`
      */
    ["com.affine.payment.member.team.change.admin"](): string;
    /**
      * `将角色更改为协作者`
      */
    ["com.affine.payment.member.team.change.collaborator"](): string;
    /**
      * `指定为所有者`
      */
    ["com.affine.payment.member.team.assign"](): string;
    /**
      * `团队席位不足`
      */
    ["com.affine.payment.member.team.retry-payment.title"](): string;
    /**
      * `添加新团队成员的付款失败。要添加更多席位，请更新您的付款方式并处理未付发票。`
      */
    ["com.affine.payment.member.team.retry-payment.owner.description"](): string;
    /**
      * `添加新团队成员的付款失败。请联系您的工作区所有者更新付款方式并处理未付发票。`
      */
    ["com.affine.payment.member.team.retry-payment.admin.description"](): string;
    /**
      * `更新付款方式`
      */
    ["com.affine.payment.member.team.retry-payment.update-payment"](): string;
    /**
      * `您的团队工作区的订阅已被停用。要添加更多席位，您需要先恢复订阅。`
      */
    ["com.affine.payment.member.team.disabled-subscription.owner.description"](): string;
    /**
      * `您的团队工作区已禁用订阅，无法添加更多席位。请联系您的工作区所有者以启用订阅。`
      */
    ["com.affine.payment.member.team.disabled-subscription.admin.description"](): string;
    /**
      * `恢复订阅`
      */
    ["com.affine.payment.member.team.disabled-subscription.resume-subscription"](): string;
    /**
      * `邀请已撤销`
      */
    ["com.affine.payment.member.team.revoke.notify.title"](): string;
    /**
      * `您已取消 {{name}}的邀请`
      */
    ["com.affine.payment.member.team.revoke.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `请求已批准`
      */
    ["com.affine.payment.member.team.approve.notify.title"](): string;
    /**
      * `您已批准 {{name}} 加入此工作区`
      */
    ["com.affine.payment.member.team.approve.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `请求被拒绝`
      */
    ["com.affine.payment.member.team.decline.notify.title"](): string;
    /**
      * `您已拒绝 {{name}} 加入此工作区`
      */
    ["com.affine.payment.member.team.decline.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `成员已移除`
      */
    ["com.affine.payment.member.team.remove.notify.title"](): string;
    /**
      * `您已将 {{name}} 从工作区中移除`
      */
    ["com.affine.payment.member.team.remove.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `角色已更新`
      */
    ["com.affine.payment.member.team.change.notify.title"](): string;
    /**
      * `您已成功将 {{name}} 晋升为管理员。`
      */
    ["com.affine.payment.member.team.change.admin.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `您已成功将 {{name}} 调整为协作者。`
      */
    ["com.affine.payment.member.team.change.collaborator.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `所有者已指定`
      */
    ["com.affine.payment.member.team.assign.notify.title"](): string;
    /**
      * `您已成功指定 {{name}} 作为该工作区的所有者。`
      */
    ["com.affine.payment.member.team.assign.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `确认新工作区所有者`
      */
    ["com.affine.payment.member.team.assign.confirm.title"](): string;
    /**
      * `您即将把工作区所有权转移给 {{name}}。请仔细查看以下变更：`
      */
    ["com.affine.payment.member.team.assign.confirm.description"](options: {
        readonly name: string;
    }): string;
    /**
      * `此操作无法撤消`
      */
    ["com.affine.payment.member.team.assign.confirm.description-1"](): string;
    /**
      * `您的角色将更改为管理员`
      */
    ["com.affine.payment.member.team.assign.confirm.description-2"](): string;
    /**
      * `您将失去该工作区的所有权`
      */
    ["com.affine.payment.member.team.assign.confirm.description-3"](): string;
    /**
      * `输入工作区名称以确认转移`
      */
    ["com.affine.payment.member.team.assign.confirm.description-4"](): string;
    /**
      * `请输入工作区名称以确认`
      */
    ["com.affine.payment.member.team.assign.confirm.placeholder"](): string;
    /**
      * `转移所有权`
      */
    ["com.affine.payment.member.team.assign.confirm.button"](): string;
    /**
      * `从工作区中删除此成员？`
      */
    ["com.affine.payment.member.team.remove.confirm.title"](): string;
    /**
      * `此操作将立即撤销他们对所有工作区资源的访问权限。`
      */
    ["com.affine.payment.member.team.remove.confirm.description"](): string;
    /**
      * `移除成员`
      */
    ["com.affine.payment.member.team.remove.confirm.confirm-button"](): string;
    /**
      * `取消`
      */
    ["com.affine.payment.member.team.remove.confirm.cancel"](): string;
    /**
      * `取消`
      */
    ["com.affine.payment.modal.change.cancel"](): string;
    /**
      * `更改`
      */
    ["com.affine.payment.modal.change.confirm"](): string;
    /**
      * `更改您的订阅`
      */
    ["com.affine.payment.modal.change.title"](): string;
    /**
      * `取消订阅`
      */
    ["com.affine.payment.modal.downgrade.cancel"](): string;
    /**
      * `您可以继续使用 识光 Cloud 专业版，直到本计费周期结束:)`
      */
    ["com.affine.payment.modal.downgrade.caption"](): string;
    /**
      * `保持 识光 Cloud 专业版`
      */
    ["com.affine.payment.modal.downgrade.confirm"](): string;
    /**
      * `保持团队计划`
      */
    ["com.affine.payment.modal.downgrade.team-confirm"](): string;
    /**
      * `很遗憾看到您离开，但我们一直在努力改进，欢迎您的反馈。我们希望在未来能再次看到您。`
      */
    ["com.affine.payment.modal.downgrade.content"](): string;
    /**
      * `您确定吗？`
      */
    ["com.affine.payment.modal.downgrade.title"](): string;
    /**
      * `取消`
      */
    ["com.affine.payment.modal.resume.cancel"](): string;
    /**
      * `确认`
      */
    ["com.affine.payment.modal.resume.confirm"](): string;
    /**
      * `您确定要恢复 Pro 账户的订阅吗？这意味着您的支付方式将在每个计费周期结束时自动扣费，从下一个计费周期开始。`
      */
    ["com.affine.payment.modal.resume.content"](): string;
    /**
      * `恢复自动续费？`
      */
    ["com.affine.payment.modal.resume.title"](): string;
    /**
      * `刷新`
      */
    ["com.affine.payment.plans-error-retry"](): string;
    /**
      * `无法加载定价计划，请检查您的网络。`
      */
    ["com.affine.payment.plans-error-tip"](): string;
    /**
      * `每月`
      */
    ["com.affine.payment.recurring-monthly"](): string;
    /**
      * `每年`
      */
    ["com.affine.payment.recurring-yearly"](): string;
    /**
      * `恢复`
      */
    ["com.affine.payment.resume"](): string;
    /**
      * `订阅已恢复`
      */
    ["com.affine.payment.resume.success.title"](): string;
    /**
      * `您的团队工作区订阅已成功启用。更改将立即生效。`
      */
    ["com.affine.payment.resume.success.team.message"](): string;
    /**
      * `恢复自动续费`
      */
    ["com.affine.payment.resume-renewal"](): string;
    /**
      * `查看所有计划`
      */
    ["com.affine.payment.see-all-plans"](): string;
    /**
      * `免费注册`
      */
    ["com.affine.payment.sign-up-free"](): string;
    /**
      * `云存储空间不足。 请联系该工作区的所有者。`
      */
    ["com.affine.payment.storage-limit.description.member"](): string;
    /**
      * `云存储空间不足。 您可以升级您的帐户以解锁更多云存储空间。`
      */
    ["com.affine.payment.storage-limit.description.owner"](): string;
    /**
      * `同步失败，存储空间不足。您可以通过删除多余的内容、升级您的帐户或增加您的工作区存储空间来解决此问题。`
      */
    ["com.affine.payment.storage-limit.new-description.owner"](): string;
    /**
      * `同步失败，存储空间限制。`
      */
    ["com.affine.payment.storage-limit.new-title"](): string;
    /**
      * `查看`
      */
    ["com.affine.payment.storage-limit.view"](): string;
    /**
      * `您目前处于 {{plan}} 计划。当前计费周期结束后，您的账户将自动切换到免费计划。`
      */
    ["com.affine.payment.subtitle-canceled"](options: {
        readonly plan: string;
    }): string;
    /**
      * `这是 识光 Cloud 的定价计划。您可以先注册或登录您的账户。`
      */
    ["com.affine.payment.subtitle-not-signed-in"](): string;
    /**
      * `查看所有计划`
      */
    ["com.affine.payment.tag-tooltips"](): string;
    /**
      * `请告诉我们您的使用案例`
      */
    ["com.affine.payment.tell-us-use-case"](): string;
    /**
      * `定价计划`
      */
    ["com.affine.payment.title"](): string;
    /**
      * `您已更改您的计划为 {{plan}} 计费。`
      */
    ["com.affine.payment.updated-notify-msg"](options: {
        readonly plan: string;
    }): string;
    /**
      * `订阅已更新`
      */
    ["com.affine.payment.updated-notify-title"](): string;
    /**
      * `升级`
      */
    ["com.affine.payment.upgrade"](): string;
    /**
      * `兑换码`
      */
    ["com.affine.payment.redeem-code"](): string;
    /**
      * `我们希望听到更多关于我们不足之处的意见，这可以让 识光 变得更好。`
      */
    ["com.affine.payment.upgrade-success-notify.content"](): string;
    /**
      * `稍后`
      */
    ["com.affine.payment.upgrade-success-notify.later"](): string;
    /**
      * `好的，在浏览器中打开`
      */
    ["com.affine.payment.upgrade-success-notify.ok-client"](): string;
    /**
      * `好的，在新标签页打开`
      */
    ["com.affine.payment.upgrade-success-notify.ok-web"](): string;
    /**
      * `感谢您的订阅！`
      */
    ["com.affine.payment.upgrade-success-notify.title"](): string;
    /**
      * `恭喜！您的识光账户已成功升级为 Pro 账户。`
      */
    ["com.affine.payment.upgrade-success-page.text"](): string;
    /**
      * `升级成功！`
      */
    ["com.affine.payment.upgrade-success-page.title"](): string;
    /**
      * `恭喜！您的工作区已成功升级为团队工作区。现在您可以邀请无限多的成员在此工作区中进行协作。`
      */
    ["com.affine.payment.upgrade-success-page.team.text-1"](): string;
    /**
      * `感谢您的购买！`
      */
    ["com.affine.payment.license-success.title"](): string;
    /**
      * `感谢您购买 识光 自托管许可。`
      */
    ["com.affine.payment.license-success.text-1"](): string;
    /**
      * `您可以在 设置 > 工作区 > 许可证 > 使用已购买的密钥 中使用此密钥进行升级`
      */
    ["com.affine.payment.license-success.hint"](): string;
    /**
      * `打开 识光`
      */
    ["com.affine.payment.license-success.open-affine"](): string;
    /**
      * `复制密钥到剪贴板`
      */
    ["com.affine.payment.license-success.copy"](): string;
    /**
      * `查看访问分析`
      */
    ["com.affine.doc.analytics.title"](): string;
    /**
      * `（共 {{count}} 次）`
      */
    ["com.affine.doc.analytics.summary.total"](options: {
        readonly count: string;
    }): string;
    /**
      * `最近 {{days}} 天`
      */
    ["com.affine.doc.analytics.window.last-days"](options: {
        readonly days: string;
    }): string;
    /**
      * `总计`
      */
    ["com.affine.doc.analytics.metric.total"](): string;
    /**
      * `独立`
      */
    ["com.affine.doc.analytics.metric.unique"](): string;
    /**
      * `访客`
      */
    ["com.affine.doc.analytics.metric.guest"](): string;
    /**
      * `总浏览量`
      */
    ["com.affine.doc.analytics.chart.total-views"](): string;
    /**
      * `独立浏览量`
      */
    ["com.affine.doc.analytics.chart.unique-views"](): string;
    /**
      * `无法加载分析数据。`
      */
    ["com.affine.doc.analytics.error.load-analytics"](): string;
    /**
      * `无法加载查看者。`
      */
    ["com.affine.doc.analytics.error.load-viewers"](): string;
    /**
      * `此时间范围内没有页面浏览。`
      */
    ["com.affine.doc.analytics.empty.no-page-views"](): string;
    /**
      * `此时间范围内没有查看者。`
      */
    ["com.affine.doc.analytics.empty.no-viewers"](): string;
    /**
      * `查看者`
      */
    ["com.affine.doc.analytics.viewers.title"](): string;
    /**
      * `显示所有查看者`
      */
    ["com.affine.doc.analytics.viewers.show-all"](): string;
    /**
      * `打开定价方案`
      */
    ["com.affine.doc.analytics.paywall.open-pricing"](): string;
    /**
      * `超过 7 天的文档分析需要 识光 Team 订阅。`
      */
    ["com.affine.doc.analytics.paywall.toast"](): string;
    /**
      * `关闭`
      */
    ["com.affine.peek-view-controls.close"](): string;
    /**
      * `打开这篇文档`
      */
    ["com.affine.peek-view-controls.open-doc"](): string;
    /**
      * `在无界中打开`
      */
    ["com.affine.peek-view-controls.open-doc-in-edgeless"](): string;
    /**
      * `在新标签页打开`
      */
    ["com.affine.peek-view-controls.open-doc-in-new-tab"](): string;
    /**
      * `在分割视图中打开`
      */
    ["com.affine.peek-view-controls.open-doc-in-split-view"](): string;
    /**
      * `打开文档详情`
      */
    ["com.affine.peek-view-controls.open-info"](): string;
    /**
      * `打开此附件`
      */
    ["com.affine.peek-view-controls.open-attachment"](): string;
    /**
      * `在新标签页打开`
      */
    ["com.affine.peek-view-controls.open-attachment-in-new-tab"](): string;
    /**
      * `在分割视图中打开`
      */
    ["com.affine.peek-view-controls.open-attachment-in-split-view"](): string;
    /**
      * `在中心预览打开`
      */
    ["com.affine.peek-view-controls.open-doc-in-center-peek"](): string;
    /**
      * `复制链接`
      */
    ["com.affine.peek-view-controls.copy-link"](): string;
    /**
      * `点击或拖动`
      */
    ["com.affine.split-view-drag-handle.tooltip"](): string;
    /**
      * `拆分视图不支持文件夹。`
      */
    ["com.affine.split-view-folder-warning.description"](): string;
    /**
      * `不再显示此内容`
      */
    ["do-not-show-this-again"](): string;
    /**
      * `新建`
      */
    ["com.affine.quicksearch.group.creation"](): string;
    /**
      * `本地搜索`
      */
    ["com.affine.quicksearch.search-locally"](): string;
    /**
      * `搜索 "{{query}}"`
      */
    ["com.affine.quicksearch.group.searchfor"](options: {
        readonly query: string;
    }): string;
    /**
      * `搜索 "{{query}}" （本地）`
      */
    ["com.affine.quicksearch.group.searchfor-locally"](options: {
        readonly query: string;
    }): string;
    /**
      * `重置同步`
      */
    ["com.affine.resetSyncStatus.button"](): string;
    /**
      * `此操作可能会修复一些同步问题。`
      */
    ["com.affine.resetSyncStatus.description"](): string;
    /**
      * `精选`
      */
    ["com.affine.rootAppSidebar.collections"](): string;
    /**
      * `提醒`
      */
    ["com.affine.rootAppSidebar.notifications"](): string;
    /**
      * `此处只能放置文档`
      */
    ["com.affine.rootAppSidebar.doc.link-doc-only"](): string;
    /**
      * `没有链接文档`
      */
    ["com.affine.rootAppSidebar.docs.no-subdoc"](): string;
    /**
      * `链接文档加载中...`
      */
    ["com.affine.rootAppSidebar.docs.references-loading"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.rootAppSidebar.explorer.collection-add-tooltip"](): string;
    /**
      * `新建精选`
      */
    ["com.affine.rootAppSidebar.explorer.collection-section-add-tooltip"](): string;
    /**
      * `添加链接文档`
      */
    ["com.affine.rootAppSidebar.explorer.doc-add-tooltip"](): string;
    /**
      * `复制`
      */
    ["com.affine.rootAppSidebar.explorer.drop-effect.copy"](): string;
    /**
      * `链接`
      */
    ["com.affine.rootAppSidebar.explorer.drop-effect.link"](): string;
    /**
      * `移动`
      */
    ["com.affine.rootAppSidebar.explorer.drop-effect.move"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.rootAppSidebar.explorer.fav-section-add-tooltip"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.rootAppSidebar.explorer.organize-add-tooltip"](): string;
    /**
      * `新建文件夹`
      */
    ["com.affine.rootAppSidebar.explorer.organize-section-add-tooltip"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.rootAppSidebar.explorer.tag-add-tooltip"](): string;
    /**
      * `新建标签`
      */
    ["com.affine.rootAppSidebar.explorer.tag-section-add-tooltip"](): string;
    /**
      * `收藏夹`
      */
    ["com.affine.rootAppSidebar.favorites"](): string;
    /**
      * `您可以将文档添加到您的收藏`
      */
    ["com.affine.rootAppSidebar.favorites.empty"](): string;
    /**
      * `迁移数据`
      */
    ["com.affine.rootAppSidebar.migration-data"](): string;
    /**
      * `清空旧收藏夹`
      */
    ["com.affine.rootAppSidebar.migration-data.clean-all"](): string;
    /**
      * `取消`
      */
    ["com.affine.rootAppSidebar.migration-data.clean-all.cancel"](): string;
    /**
      * `好的`
      */
    ["com.affine.rootAppSidebar.migration-data.clean-all.confirm"](): string;
    /**
      * `“收藏夹”将被改为个人收藏夹`
      */
    ["com.affine.rootAppSidebar.migration-data.help"](): string;
    /**
      * `清空旧收藏夹`
      */
    ["com.affine.rootAppSidebar.migration-data.help.clean-all"](): string;
    /**
      * `好的`
      */
    ["com.affine.rootAppSidebar.migration-data.help.confirm"](): string;
    /**
      * `组织`
      */
    ["com.affine.rootAppSidebar.organize"](): string;
    /**
      * `删除`
      */
    ["com.affine.rootAppSidebar.organize.delete"](): string;
    /**
      * `从文件夹移出`
      */
    ["com.affine.rootAppSidebar.organize.delete-from-folder"](): string;
    /**
      * `删除文件夹不会删除任何文档、标签或精选。`
      */
    ["com.affine.rootAppSidebar.organize.delete.notify-message"](): string;
    /**
      * `删除 {{name}}`
      */
    ["com.affine.rootAppSidebar.organize.delete.notify-title"](options: {
        readonly name: string;
    }): string;
    /**
      * `没有文件夹`
      */
    ["com.affine.rootAppSidebar.organize.empty"](): string;
    /**
      * `空文件夹`
      */
    ["com.affine.rootAppSidebar.organize.empty-folder"](): string;
    /**
      * `添加文档`
      */
    ["com.affine.rootAppSidebar.organize.empty-folder.add-pages"](): string;
    /**
      * `新建文件夹`
      */
    ["com.affine.rootAppSidebar.organize.empty.new-folders-button"](): string;
    /**
      * `加入收藏夹`
      */
    ["com.affine.rootAppSidebar.organize.folder-add-favorite"](): string;
    /**
      * `从收藏夹中移除`
      */
    ["com.affine.rootAppSidebar.organize.folder-rm-favorite"](): string;
    /**
      * `添加精选`
      */
    ["com.affine.rootAppSidebar.organize.folder.add-collections"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.rootAppSidebar.organize.folder.new-doc"](): string;
    /**
      * `添加文档`
      */
    ["com.affine.rootAppSidebar.organize.folder.add-docs"](): string;
    /**
      * `添加其他`
      */
    ["com.affine.rootAppSidebar.organize.folder.add-others"](): string;
    /**
      * `添加标签`
      */
    ["com.affine.rootAppSidebar.organize.folder.add-tags"](): string;
    /**
      * `创建子文件夹`
      */
    ["com.affine.rootAppSidebar.organize.folder.create-subfolder"](): string;
    /**
      * `新建文件夹`
      */
    ["com.affine.rootAppSidebar.organize.new-folders"](): string;
    /**
      * `此处只能放置文件夹`
      */
    ["com.affine.rootAppSidebar.organize.root-folder-only"](): string;
    /**
      * `添加更多`
      */
    ["com.affine.rootAppSidebar.organize.add-more"](): string;
    /**
      * `创建文件夹`
      */
    ["com.affine.rootAppSidebar.organize.add-folder"](): string;
    /**
      * `新建精选`
      */
    ["com.affine.rootAppSidebar.collection.new"](): string;
    /**
      * `其他`
      */
    ["com.affine.rootAppSidebar.others"](): string;
    /**
      * `此处只能放置文档`
      */
    ["com.affine.rootAppSidebar.tag.doc-only"](): string;
    /**
      * `标签`
      */
    ["com.affine.rootAppSidebar.tags"](): string;
    /**
      * `没有标签`
      */
    ["com.affine.rootAppSidebar.tags.empty"](): string;
    /**
      * `新建标签`
      */
    ["com.affine.rootAppSidebar.tags.empty.new-tag-button"](): string;
    /**
      * `新建标签`
      */
    ["com.affine.rootAppSidebar.tags.new-tag"](): string;
    /**
      * `没有文档`
      */
    ["com.affine.rootAppSidebar.tags.no-doc"](): string;
    /**
      * `拖动调整宽度`
      */
    ["com.affine.rootAppSidebar.resize-handle.tooltip.drag"](): string;
    /**
      * `点击收起侧栏`
      */
    ["com.affine.rootAppSidebar.resize-handle.tooltip.click"](): string;
    /**
      * `在这输入...`
      */
    ["com.affine.search-tags.placeholder"](): string;
    /**
      * `选择页面为空`
      */
    ["com.affine.selectPage.empty"](): string;
    /**
      * `已选中的文档`
      */
    ["com.affine.selectPage.selected"](): string;
    /**
      * `添加选中的文档`
      */
    ["com.affine.selectPage.title"](): string;
    /**
      * `搜索精选...`
      */
    ["com.affine.selector-collection.search.placeholder"](): string;
    /**
      * `搜索标签...`
      */
    ["com.affine.selector-tag.search.placeholder"](): string;
    /**
      * `通知`
      */
    ["com.affine.setting.notifications"](): string;
    /**
      * `通知`
      */
    ["com.affine.setting.notifications.header.title"](): string;
    /**
      * `选择您想要接收的更新类型以及获取更新的位置。`
      */
    ["com.affine.setting.notifications.header.description"](): string;
    /**
      * `邮件通知`
      */
    ["com.affine.setting.notifications.email.title"](): string;
    /**
      * `提醒`
      */
    ["com.affine.setting.notifications.email.mention.title"](): string;
    /**
      * `当工作空间的其他成员@你时，你将通过电子邮件收到通知。`
      */
    ["com.affine.setting.notifications.email.mention.subtitle"](): string;
    /**
      * `邀请`
      */
    ["com.affine.setting.notifications.email.invites.title"](): string;
    /**
      * `邀请消息将通过电子邮件发送。`
      */
    ["com.affine.setting.notifications.email.invites.subtitle"](): string;
    /**
      * `评论`
      */
    ["com.affine.setting.notifications.email.comments.title"](): string;
    /**
      * `当工作区的其他成员评论你的文档时，你将通过电子邮件收到通知。`
      */
    ["com.affine.setting.notifications.email.comments.subtitle"](): string;
    /**
      * `账号设置`
      */
    ["com.affine.setting.account"](): string;
    /**
      * `从{{server}}删除您的账户`
      */
    ["com.affine.setting.account.delete-from-server"](options: {
        readonly server: string;
    }): string;
    /**
      * `一旦删除，您的账户将无法访问，您在服务器上的个人空间数据将被永久删除。`
      */
    ["com.affine.setting.account.delete.message"](): string;
    /**
      * `无法删除帐户`
      */
    ["com.affine.setting.account.delete.team-warning-title"](): string;
    /**
      * `您是团队工作区的拥有者。要删除您的帐户，请先删除工作区或转移所有权。`
      */
    ["com.affine.setting.account.delete.team-warning-description"](): string;
    /**
      * `删除您的账户？`
      */
    ["com.affine.setting.account.delete.confirm-title"](): string;
    /**
      * `确认你的邮箱`
      */
    ["com.affine.setting.account.delete.email-confirm-title"](): string;
    /**
      * `请输入您的电子邮件以确认`
      */
    ["com.affine.setting.account.delete.input-placeholder"](): string;
    /**
      * `删除`
      */
    ["com.affine.setting.account.delete.confirm-button"](): string;
    /**
      * `账户已删除`
      */
    ["com.affine.setting.account.delete.success-title"](): string;
    /**
      * `您的账户和服务器上的数据已被删除。`
      */
    ["com.affine.setting.account.delete.success-description-1"](): string;
    /**
      * `可以通过卸载应用程序和清除浏览器数据来删除本地数据。`
      */
    ["com.affine.setting.account.delete.success-description-2"](): string;
    /**
      * `个人信息`
      */
    ["com.affine.setting.account.message"](): string;
    /**
      * `通过 识光 同步`
      */
    ["com.affine.setting.sign.message"](): string;
    /**
      * `安全登出账户`
      */
    ["com.affine.setting.sign.out.message"](): string;
    /**
      * `常规`
      */
    ["com.affine.settingSidebar.settings.general"](): string;
    /**
      * `工作区`
      */
    ["com.affine.settingSidebar.settings.workspace"](): string;
    /**
      * `设置`
      */
    ["com.affine.settingSidebar.title"](): string;
    /**
      * `外观`
      */
    ["com.affine.settings.appearance"](): string;
    /**
      * `自定义客户端外观。`
      */
    ["com.affine.settings.appearance.border-style-description"](): string;
    /**
      * `定制您的日期格式。`
      */
    ["com.affine.settings.appearance.date-format-description"](): string;
    /**
      * `文档内容的最大显示量。`
      */
    ["com.affine.settings.appearance.full-width-description"](): string;
    /**
      * `选择界面语言。`
      */
    ["com.affine.settings.appearance.language-description"](): string;
    /**
      * `默认情况下，一周从星期日开始。`
      */
    ["com.affine.settings.appearance.start-week-description"](): string;
    /**
      * `自定义 Windows 客户端外观。`
      */
    ["com.affine.settings.appearance.window-frame-description"](): string;
    /**
      * `链接`
      */
    ["com.affine.setting.appearance.links"](): string;
    /**
      * `打开 识光 链接`
      */
    ["com.affine.setting.appearance.open-in-app"](): string;
    /**
      * `您可以选择在客户端或浏览器中打开此链接`
      */
    ["com.affine.setting.appearance.open-in-app.hint"](): string;
    /**
      * `每次询问`
      */
    ["com.affine.setting.appearance.open-in-app.always-ask"](): string;
    /**
      * `在客户端中打开该链接`
      */
    ["com.affine.setting.appearance.open-in-app.open-in-desktop-app"](): string;
    /**
      * `在浏览器中打开该链接`
      */
    ["com.affine.setting.appearance.open-in-app.open-in-web"](): string;
    /**
      * `打开 识光 链接`
      */
    ["com.affine.setting.appearance.open-in-app.title"](): string;
    /**
      * `在 识光 客户端中打开`
      */
    ["com.affine.open-in-app.card.title"](): string;
    /**
      * `在客户端中打开`
      */
    ["com.affine.open-in-app.card.button.open"](): string;
    /**
      * `忽略`
      */
    ["com.affine.open-in-app.card.button.dismiss"](): string;
    /**
      * `记住我的选择`
      */
    ["com.affine.open-in-app.card.remember"](): string;
    /**
      * `下载客户端`
      */
    ["com.affine.open-in-app.card.download"](): string;
    /**
      * `如果启用，它将定期自动检查新版本。`
      */
    ["com.affine.settings.auto-check-description"](): string;
    /**
      * `如果启用，新版本将自动下载到当前设备。`
      */
    ["com.affine.settings.auto-download-description"](): string;
    /**
      * `编辑器`
      */
    ["com.affine.settings.editorSettings"](): string;
    /**
      * `无界`
      */
    ["com.affine.settings.editorSettings.edgeless"](): string;
    /**
      * `连线`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter"](): string;
    /**
      * `边框样式`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.border-style"](): string;
    /**
      * `边框厚度`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.border-thickness"](): string;
    /**
      * `颜色`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.color"](): string;
    /**
      * `连线形状`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.connector-shape"](): string;
    /**
      * `曲线`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.connector-shape.curve"](): string;
    /**
      * `折线`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.connector-shape.elbowed"](): string;
    /**
      * `直线`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.connector-shape.straight"](): string;
    /**
      * `结束端点`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.end-endpoint"](): string;
    /**
      * `起始端点`
      */
    ["com.affine.settings.editorSettings.edgeless.connecter.start-endpoint"](): string;
    /**
      * `自定义`
      */
    ["com.affine.settings.editorSettings.edgeless.custom"](): string;
    /**
      * `思维导图`
      */
    ["com.affine.settings.editorSettings.edgeless.mind-map"](): string;
    /**
      * `布局`
      */
    ["com.affine.settings.editorSettings.edgeless.mind-map.layout"](): string;
    /**
      * `左侧`
      */
    ["com.affine.settings.editorSettings.edgeless.mind-map.layout.left"](): string;
    /**
      * `居中`
      */
    ["com.affine.settings.editorSettings.edgeless.mind-map.layout.radial"](): string;
    /**
      * `右侧`
      */
    ["com.affine.settings.editorSettings.edgeless.mind-map.layout.right"](): string;
    /**
      * `笔记`
      */
    ["com.affine.settings.editorSettings.edgeless.note"](): string;
    /**
      * `背景`
      */
    ["com.affine.settings.editorSettings.edgeless.note.background"](): string;
    /**
      * `边框样式`
      */
    ["com.affine.settings.editorSettings.edgeless.note.border"](): string;
    /**
      * `边框厚度`
      */
    ["com.affine.settings.editorSettings.edgeless.note.border-thickness"](): string;
    /**
      * `虚线`
      */
    ["com.affine.settings.editorSettings.edgeless.note.border.dash"](): string;
    /**
      * `无边框`
      */
    ["com.affine.settings.editorSettings.edgeless.note.border.none"](): string;
    /**
      * `实线`
      */
    ["com.affine.settings.editorSettings.edgeless.note.border.solid"](): string;
    /**
      * `圆角`
      */
    ["com.affine.settings.editorSettings.edgeless.note.corners"](): string;
    /**
      * `阴影样式`
      */
    ["com.affine.settings.editorSettings.edgeless.note.shadow"](): string;
    /**
      * `笔`
      */
    ["com.affine.settings.editorSettings.edgeless.pen"](): string;
    /**
      * `颜色`
      */
    ["com.affine.settings.editorSettings.edgeless.pen.color"](): string;
    /**
      * `画笔粗细`
      */
    ["com.affine.settings.editorSettings.edgeless.pen.thickness"](): string;
    /**
      * `图形`
      */
    ["com.affine.settings.editorSettings.edgeless.shape"](): string;
    /**
      * `边框颜色`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.border-color"](): string;
    /**
      * `边框样式`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.border-style"](): string;
    /**
      * `边框厚度`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.border-thickness"](): string;
    /**
      * `菱形`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.diamond"](): string;
    /**
      * `圆形`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.ellipse"](): string;
    /**
      * `填充颜色`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.fill-color"](): string;
    /**
      * `流程图`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.flow"](): string;
    /**
      * `字体`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.font"](): string;
    /**
      * `字体大小`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.font-size"](): string;
    /**
      * `字体样式`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.font-style"](): string;
    /**
      * `列表`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.list"](): string;
    /**
      * `圆角矩形`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.rounded-rectangle"](): string;
    /**
      * `正方形`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.square"](): string;
    /**
      * `文本对齐`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.text-alignment"](): string;
    /**
      * `文本颜色`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.text-color"](): string;
    /**
      * `三角形`
      */
    ["com.affine.settings.editorSettings.edgeless.shape.triangle"](): string;
    /**
      * `框架`
      */
    ["com.affine.settings.editorSettings.edgeless.frame"](): string;
    /**
      * `背景`
      */
    ["com.affine.settings.editorSettings.edgeless.frame.background"](): string;
    /**
      * `样式`
      */
    ["com.affine.settings.editorSettings.edgeless.style"](): string;
    /**
      * `常规`
      */
    ["com.affine.settings.editorSettings.edgeless.style.general"](): string;
    /**
      * `涂鸦`
      */
    ["com.affine.settings.editorSettings.edgeless.style.scribbled"](): string;
    /**
      * `文本`
      */
    ["com.affine.settings.editorSettings.edgeless.text"](): string;
    /**
      * `对齐方式`
      */
    ["com.affine.settings.editorSettings.edgeless.text.alignment"](): string;
    /**
      * `居中`
      */
    ["com.affine.settings.editorSettings.edgeless.text.alignment.center"](): string;
    /**
      * `左侧`
      */
    ["com.affine.settings.editorSettings.edgeless.text.alignment.left"](): string;
    /**
      * `右侧`
      */
    ["com.affine.settings.editorSettings.edgeless.text.alignment.right"](): string;
    /**
      * `文本颜色`
      */
    ["com.affine.settings.editorSettings.edgeless.text.color"](): string;
    /**
      * `字体`
      */
    ["com.affine.settings.editorSettings.edgeless.text.font"](): string;
    /**
      * `字体`
      */
    ["com.affine.settings.editorSettings.edgeless.text.font-family"](): string;
    /**
      * `字体大小`
      */
    ["com.affine.settings.editorSettings.edgeless.text.font-size"](): string;
    /**
      * `字体样式`
      */
    ["com.affine.settings.editorSettings.edgeless.text.font-style"](): string;
    /**
      * `字重`
      */
    ["com.affine.settings.editorSettings.edgeless.text.font-weight"](): string;
    /**
      * `常规`
      */
    ["com.affine.settings.editorSettings.general"](): string;
    /**
      * `启用卓越的 AI 助手，识光 AI。`
      */
    ["com.affine.settings.editorSettings.general.ai.description"](): string;
    /**
      * `禁用 AI 并重新加载`
      */
    ["com.affine.settings.editorSettings.general.ai.disable.confirm"](): string;
    /**
      * `您确定要禁用 AI 吗？我们重视您的工作效率，而我们的 AI 可以提高它。请再考虑一下！`
      */
    ["com.affine.settings.editorSettings.general.ai.disable.description"](): string;
    /**
      * `禁用 AI ？`
      */
    ["com.affine.settings.editorSettings.general.ai.disable.title"](): string;
    /**
      * `启用 AI 并重新加载`
      */
    ["com.affine.settings.editorSettings.general.ai.enable.confirm"](): string;
    /**
      * `您想启用 AI 吗？我们的 AI 助手已准备好提高您的工作效率并提供智能帮助。让我们开始吧！我们需要重新加载页面以进行此更改。`
      */
    ["com.affine.settings.editorSettings.general.ai.enable.description"](): string;
    /**
      * `启用 AI ？`
      */
    ["com.affine.settings.editorSettings.general.ai.enable.title"](): string;
    /**
      * `识光 AI`
      */
    ["com.affine.settings.editorSettings.general.ai.title"](): string;
    /**
      * `设置默认编程语言。`
      */
    ["com.affine.settings.editorSettings.general.default-code-block.language.description"](): string;
    /**
      * `代码块默认语言`
      */
    ["com.affine.settings.editorSettings.general.default-code-block.language.title"](): string;
    /**
      * `默认在所有代码块中显示行号。`
      */
    ["com.affine.settings.editorSettings.general.default-code-block.line-numbers.description"](): string;
    /**
      * `代码块显示行号`
      */
    ["com.affine.settings.editorSettings.general.default-code-block.line-numbers.title"](): string;
    /**
      * `自动换行代码片段以提高可读性。`
      */
    ["com.affine.settings.editorSettings.general.default-code-block.wrap.description"](): string;
    /**
      * `在代码块中自动换行`
      */
    ["com.affine.settings.editorSettings.general.default-code-block.wrap.title"](): string;
    /**
      * `创建文档的预设模式`
      */
    ["com.affine.settings.editorSettings.general.default-new-doc.description"](): string;
    /**
      * `创建文档的预设模式`
      */
    ["com.affine.settings.editorSettings.general.default-new-doc.title"](): string;
    /**
      * `用当前日期自动命名新文档`
      */
    ["com.affine.settings.editorSettings.general.auto-date-title.title"](): string;
    /**
      * `自动用今天的日期命名空白新文档。`
      */
    ["com.affine.settings.editorSettings.general.auto-date-title.description"](): string;
    /**
      * `新文档日期格式`
      */
    ["com.affine.settings.editorSettings.general.auto-date-title.format.title"](): string;
    /**
      * `选择自动新文档标题使用的日期格式。`
      */
    ["com.affine.settings.editorSettings.general.auto-date-title.format.description"](): string;
    /**
      * `DD-MM-YYYY`
      */
    ["com.affine.settings.editorSettings.general.auto-date-title.format.dd-mm-yyyy"](): string;
    /**
      * `MM-DD-YYYY`
      */
    ["com.affine.settings.editorSettings.general.auto-date-title.format.mm-dd-yyyy"](): string;
    /**
      * `YYYY-MM-DD`
      */
    ["com.affine.settings.editorSettings.general.auto-date-title.format.yyyy-mm-dd"](): string;
    /**
      * `日记样式（本地化）`
      */
    ["com.affine.settings.editorSettings.general.auto-date-title.format.journal"](): string;
    /**
      * `显示添加图标选项`
      */
    ["com.affine.settings.editorSettings.general.add-icon-option.title"](): string;
    /**
      * `显示或隐藏无图标文档的添加图标选项。`
      */
    ["com.affine.settings.editorSettings.general.add-icon-option.description"](): string;
    /**
      * `自定义您的文本体验。`
      */
    ["com.affine.settings.editorSettings.general.font-family.custom.description"](): string;
    /**
      * `自定义字体`
      */
    ["com.affine.settings.editorSettings.general.font-family.custom.title"](): string;
    /**
      * `选择编辑器使用的字体。`
      */
    ["com.affine.settings.editorSettings.general.font-family.description"](): string;
    /**
      * `字体`
      */
    ["com.affine.settings.editorSettings.general.font-family.title"](): string;
    /**
      * `调整基础字号以提升可读性。`
      */
    ["com.affine.settings.editorSettings.general.font-size.description"](): string;
    /**
      * `字号`
      */
    ["com.affine.settings.editorSettings.general.font-size.title"](): string;
    /**
      * `自动检测并纠正拼写错误。`
      */
    ["com.affine.settings.editorSettings.general.spell-check.description"](): string;
    /**
      * `拼写检查`
      */
    ["com.affine.settings.editorSettings.general.spell-check.title"](): string;
    /**
      * `页面`
      */
    ["com.affine.settings.editorSettings.page"](): string;
    /**
      * `单击鼠标中键粘贴`
      */
    ["com.affine.settings.editorSettings.general.middle-click-paste.title"](): string;
    /**
      * `在 Linux 上默认启用鼠标中键粘贴功能。`
      */
    ["com.affine.settings.editorSettings.general.middle-click-paste.description"](): string;
    /**
      * `在文档上显示双向链接。`
      */
    ["com.affine.settings.editorSettings.page.display-bi-link.description"](): string;
    /**
      * `显示双向链接`
      */
    ["com.affine.settings.editorSettings.page.display-bi-link.title"](): string;
    /**
      * `在文档中显示文档信息。`
      */
    ["com.affine.settings.editorSettings.page.display-doc-info.description"](): string;
    /**
      * `显示文档信息`
      */
    ["com.affine.settings.editorSettings.page.display-doc-info.title"](): string;
    /**
      * `文档内容的最大显示量。`
      */
    ["com.affine.settings.editorSettings.page.full-width.description"](): string;
    /**
      * `全宽布局`
      */
    ["com.affine.settings.editorSettings.page.full-width.title"](): string;
    /**
      * `默认文档页面宽度`
      */
    ["com.affine.settings.editorSettings.page.default-page-width.title"](): string;
    /**
      * `设置新页面的默认宽度，单独在页面中设置页面宽度属性可以覆盖默认设置。`
      */
    ["com.affine.settings.editorSettings.page.default-page-width.description"](): string;
    /**
      * `标准`
      */
    ["com.affine.settings.editorSettings.page.default-page-width.standard"](): string;
    /**
      * `全宽`
      */
    ["com.affine.settings.editorSettings.page.default-page-width.full-width"](): string;
    /**
      * `设置默认的无界配色方案。`
      */
    ["com.affine.settings.editorSettings.page.edgeless-default-theme.description"](): string;
    /**
      * `无界默认配色方案`
      */
    ["com.affine.settings.editorSettings.page.edgeless-default-theme.title"](): string;
    /**
      * `由当前应用的配色方案指定`
      */
    ["com.affine.settings.editorSettings.page.edgeless-default-theme.specified"](): string;
    /**
      * `滚轮缩放`
      */
    ["com.affine.settings.editorSettings.page.edgeless-scroll-wheel-zoom.title"](): string;
    /**
      * `使用鼠标滚轮来调整缩放比例`
      */
    ["com.affine.settings.editorSettings.page.edgeless-scroll-wheel-zoom.description"](): string;
    /**
      * `首选项`
      */
    ["com.affine.settings.editorSettings.preferences"](): string;
    /**
      * `您可以导出整个首选项数据进行备份，然后可以重新导入导出的数据。`
      */
    ["com.affine.settings.editorSettings.preferences.export.description"](): string;
    /**
      * `导出设置`
      */
    ["com.affine.settings.editorSettings.preferences.export.title"](): string;
    /**
      * `您可以导入以前导出的首选项数据进行恢复。`
      */
    ["com.affine.settings.editorSettings.preferences.import.description"](): string;
    /**
      * `导入设置`
      */
    ["com.affine.settings.editorSettings.preferences.import.title"](): string;
    /**
      * `配置您自己的编辑器。`
      */
    ["com.affine.settings.editorSettings.subtitle"](): string;
    /**
      * `编辑器设置`
      */
    ["com.affine.settings.editorSettings.title"](): string;
    /**
      * `每次询问`
      */
    ["com.affine.settings.editorSettings.ask-me-every-time"](): string;
    /**
      * `电子邮件`
      */
    ["com.affine.settings.email"](): string;
    /**
      * `更改邮箱`
      */
    ["com.affine.settings.email.action"](): string;
    /**
      * `更改邮箱`
      */
    ["com.affine.settings.email.action.change"](): string;
    /**
      * `验证邮箱`
      */
    ["com.affine.settings.email.action.verify"](): string;
    /**
      * `启用 识光 同步以与他人协作`
      */
    ["com.affine.settings.member-tooltip"](): string;
    /**
      * `读取成员列表中...`
      */
    ["com.affine.settings.member.loading"](): string;
    /**
      * `侧边栏的噪点背景`
      */
    ["com.affine.settings.noise-style"](): string;
    /**
      * `在侧边栏使用噪点背景效果。`
      */
    ["com.affine.settings.noise-style-description"](): string;
    /**
      * `密码`
      */
    ["com.affine.settings.password"](): string;
    /**
      * `更改密码`
      */
    ["com.affine.settings.password.action.change"](): string;
    /**
      * `设置密码`
      */
    ["com.affine.settings.password.action.set"](): string;
    /**
      * `设置密码以登录您的账号`
      */
    ["com.affine.settings.password.message"](): string;
    /**
      * `个人资料`
      */
    ["com.affine.settings.profile"](): string;
    /**
      * `您的账户个人资料将向所有人显示。`
      */
    ["com.affine.settings.profile.message"](): string;
    /**
      * `显示名称`
      */
    ["com.affine.settings.profile.name"](): string;
    /**
      * `输入账号名称`
      */
    ["com.affine.settings.profile.placeholder"](): string;
    /**
      * `删除工作区`
      */
    ["com.affine.settings.remove-workspace"](): string;
    /**
      * `从此设备中删除工作区，并可选择删除所有数据。`
      */
    ["com.affine.settings.remove-workspace-description"](): string;
    /**
      * `登录 / 注册`
      */
    ["com.affine.settings.sign"](): string;
    /**
      * `需要更多定制选项？您可以在社区中向我们推荐它们。`
      */
    ["com.affine.settings.suggestion"](): string;
    /**
      * `侧边栏的透明效果`
      */
    ["com.affine.settings.translucent-style"](): string;
    /**
      * `在侧边栏使用半透明效果。`
      */
    ["com.affine.settings.translucent-style-description"](): string;
    /**
      * `会议`
      */
    ["com.affine.settings.meetings"](): string;
    /**
      * `优于录音功能
    你的 AI 会议助手就在这里`
      */
    ["com.affine.settings.meetings.setting.welcome"](): string;
    /**
      * `原生音频捕获，无需机器人 - 直接从您的Mac传输到会议智能体。`
      */
    ["com.affine.settings.meetings.setting.prompt"](): string;
    /**
      * `了解更多`
      */
    ["com.affine.settings.meetings.setting.welcome.learn-more"](): string;
    /**
      * `启用会议记录`
      */
    ["com.affine.settings.meetings.enable.title"](): string;
    /**
      * `会议记录`
      */
    ["com.affine.settings.meetings.record.header"](): string;
    /**
      * `会议开始时`
      */
    ["com.affine.settings.meetings.record.recording-mode"](): string;
    /**
      * `选择会议开始时的行为。`
      */
    ["com.affine.settings.meetings.record.recording-mode.description"](): string;
    /**
      * `打开已保存的录制`
      */
    ["com.affine.settings.meetings.record.open-saved-file"](): string;
    /**
      * `打开本地存储的录制文件。`
      */
    ["com.affine.settings.meetings.record.open-saved-file.description"](): string;
    /**
      * `AI转录`
      */
    ["com.affine.settings.meetings.transcription.header"](): string;
    /**
      * `AI自动总结`
      */
    ["com.affine.settings.meetings.transcription.auto-summary"](): string;
    /**
      * `自动生成会议记录的摘要。`
      */
    ["com.affine.settings.meetings.transcription.auto-summary.description"](): string;
    /**
      * `AI自动待办事项清单`
      */
    ["com.affine.settings.meetings.transcription.auto-todo"](): string;
    /**
      * `自动生成会议记录的待办事项清单。`
      */
    ["com.affine.settings.meetings.transcription.auto-todo.description"](): string;
    /**
      * `隐私 & 安全`
      */
    ["com.affine.settings.meetings.privacy.header"](): string;
    /**
      * `屏幕和系统音频录制`
      */
    ["com.affine.settings.meetings.privacy.screen-system-audio-recording"](): string;
    /**
      * `会议功能需要权限才能使用。`
      */
    ["com.affine.settings.meetings.privacy.screen-system-audio-recording.description"](): string;
    /**
      * `点击允许`
      */
    ["com.affine.settings.meetings.privacy.screen-system-audio-recording.permission-setting"](): string;
    /**
      * `麦克风`
      */
    ["com.affine.settings.meetings.privacy.microphone"](): string;
    /**
      * `会议功能需要获得权限才能使用。`
      */
    ["com.affine.settings.meetings.privacy.microphone.description"](): string;
    /**
      * `点击确认`
      */
    ["com.affine.settings.meetings.privacy.microphone.permission-setting"](): string;
    /**
      * `权限问题`
      */
    ["com.affine.settings.meetings.privacy.issues"](): string;
    /**
      * `权限已授予，但状态未更新？重新启动应用以刷新权限。`
      */
    ["com.affine.settings.meetings.privacy.issues.description"](): string;
    /**
      * `重启应用`
      */
    ["com.affine.settings.meetings.privacy.issues.restart"](): string;
    /**
      * `不执行任何操作`
      */
    ["com.affine.settings.meetings.record.recording-mode.none"](): string;
    /**
      * `自动开始录制`
      */
    ["com.affine.settings.meetings.record.recording-mode.auto-start"](): string;
    /**
      * `显示录制提示`
      */
    ["com.affine.settings.meetings.record.recording-mode.prompt"](): string;
    /**
      * `屏幕和系统音频录制`
      */
    ["com.affine.settings.meetings.record.permission-modal.title"](): string;
    /**
      * `识光 将通过录制您的会议来生成会议记录。需要获得“屏幕和系统音频录制”的授权。`
      */
    ["com.affine.settings.meetings.record.permission-modal.description"](): string;
    /**
      * `保存会议记录块至`
      */
    ["com.affine.settings.meetings.record.save-mode"](): string;
    /**
      * `打开系统设置`
      */
    ["com.affine.settings.meetings.record.permission-modal.open-setting"](): string;
    /**
      * `工作区`
      */
    ["com.affine.settings.workspace"](): string;
    /**
      * `您可以在此处自定义您的工作区。`
      */
    ["com.affine.settings.workspace.description"](): string;
    /**
      * `AI BYOK（测试版）`
      */
    ["com.affine.settings.workspace.byok.title"](): string;
    /**
      * `正在加载服务商密钥。`
      */
    ["com.affine.settings.workspace.byok.loading"](): string;
    /**
      * `为此工作区使用您自己的服务商密钥。`
      */
    ["com.affine.settings.workspace.byok.subtitle"](): string;
    /**
      * `优先使用工作区服务商密钥，再回退到 识光 AI 套餐通道。`
      */
    ["com.affine.settings.workspace.byok.header"](): string;
    /**
      * `BYOK 需要 Pro、Team 或 Believer`
      */
    ["com.affine.settings.workspace.byok.locked.title"](): string;
    /**
      * `升级此工作区后，可添加服务商密钥，并通过您自己的 OpenAI、Anthropic、Gemini 或 FAL 账号路由 识光 AI。`
      */
    ["com.affine.settings.workspace.byok.locked.description"](): string;
    /**
      * `服务商密钥`
      */
    ["com.affine.settings.workspace.byok.keys.title"](): string;
    /**
      * `列表顺序控制每个存储分组内的回退顺序。`
      */
    ["com.affine.settings.workspace.byok.keys.description"](): string;
    /**
      * `暂无服务商密钥`
      */
    ["com.affine.settings.workspace.byok.empty.title"](): string;
    /**
      * `添加密钥后，将为此工作区创建第一条路由。创建前不会显示服务商行。`
      */
    ["com.affine.settings.workspace.byok.empty.description"](): string;
    /**
      * `本地`
      */
    ["com.affine.settings.workspace.byok.storage.local"](): string;
    /**
      * `服务端`
      */
    ["com.affine.settings.workspace.byok.storage.server"](): string;
    /**
      * `工作区成员均可使用。`
      */
    ["com.affine.settings.workspace.byok.storage.server.description"](): string;
    /**
      * `保存在此桌面设备的安全存储中。`
      */
    ["com.affine.settings.workspace.byok.storage.local.description"](): string;
    /**
      * `仅识光桌面端可用。`
      */
    ["com.affine.settings.workspace.byok.storage.local.desktop-only"](): string;
    /**
      * `此设备不支持安全本地存储。`
      */
    ["com.affine.settings.workspace.byok.storage.local.unavailable"](): string;
    /**
      * `测试会将该密钥临时发送至工作区服务器，服务器不会保存。`
      */
    ["com.affine.settings.workspace.byok.storage.local.test-disclosure"](): string;
    /**
      * `失败后已禁用`
      */
    ["com.affine.settings.workspace.byok.status.disabled-after-failure"](): string;
    /**
      * `密钥已验证`
      */
    ["com.affine.settings.workspace.byok.status.key-verified"](): string;
    /**
      * `文本`
      */
    ["com.affine.settings.workspace.byok.capability.text"](): string;
    /**
      * `图片输入`
      */
    ["com.affine.settings.workspace.byok.capability.image-input"](): string;
    /**
      * `动作`
      */
    ["com.affine.settings.workspace.byok.capability.actions"](): string;
    /**
      * `图片生成`
      */
    ["com.affine.settings.workspace.byok.capability.image-generate"](): string;
    /**
      * `转录`
      */
    ["com.affine.settings.workspace.byok.capability.transcript"](): string;
    /**
      * `索引`
      */
    ["com.affine.settings.workspace.byok.capability.indexing"](): string;
    /**
      * `{{date}} 失败`
      */
    ["com.affine.settings.workspace.byok.row.activity.failed"](options: {
        readonly date: string;
    }): string;
    /**
      * `尚未使用`
      */
    ["com.affine.settings.workspace.byok.row.activity.unused"](): string;
    /**
      * `功能覆盖`
      */
    ["com.affine.settings.workspace.byok.coverage.title"](): string;
    /**
      * `写作与聊天`
      */
    ["com.affine.settings.workspace.byok.feature.chat.title"](): string;
    /**
      * `存在 OpenAI、Anthropic 或 Gemini BYOK 密钥时覆盖。`
      */
    ["com.affine.settings.workspace.byok.feature.chat.fallback"](): string;
    /**
      * `动作与结构化输出`
      */
    ["com.affine.settings.workspace.byok.feature.action.title"](): string;
    /**
      * `存在 OpenAI 或 Gemini BYOK 密钥时覆盖。`
      */
    ["com.affine.settings.workspace.byok.feature.action.fallback"](): string;
    /**
      * `图片生成`
      */
    ["com.affine.settings.workspace.byok.feature.image.title"](): string;
    /**
      * `存在 OpenAI、Gemini 或 FAL BYOK 密钥时覆盖。`
      */
    ["com.affine.settings.workspace.byok.feature.image.fallback"](): string;
    /**
      * `转录`
      */
    ["com.affine.settings.workspace.byok.feature.transcript.title"](): string;
    /**
      * `存在服务端 Gemini BYOK 密钥时覆盖。`
      */
    ["com.affine.settings.workspace.byok.feature.transcript.fallback"](): string;
    /**
      * `工作区索引`
      */
    ["com.affine.settings.workspace.byok.feature.workspace-indexing.title"](): string;
    /**
      * `存在服务端 Gemini BYOK 密钥时覆盖。`
      */
    ["com.affine.settings.workspace.byok.feature.workspace-indexing.fallback"](): string;
    /**
      * `转录和工作区索引需要服务端 Gemini BYOK 密钥，或回退到 识光 AI 套餐。`
      */
    ["com.affine.settings.workspace.byok.warning.transcript"](): string;
    /**
      * `工作区索引需要服务端 Gemini BYOK 密钥，或回退到 识光 AI 套餐。`
      */
    ["com.affine.settings.workspace.byok.warning.workspace-indexing"](): string;
    /**
      * `BYOK 用量`
      */
    ["com.affine.settings.workspace.byok.usage.title"](): string;
    /**
      * `最近 30 天`
      */
    ["com.affine.settings.workspace.byok.usage.period"](): string;
    /**
      * `{{count}} tokens`
      */
    ["com.affine.settings.workspace.byok.usage.tokens"](options: {
        readonly count: string;
    }): string;
    /**
      * `连接 AI 服务商`
      */
    ["com.affine.settings.workspace.byok.modal.connect-title"](): string;
    /**
      * `管理服务商`
      */
    ["com.affine.settings.workspace.byok.modal.manage-title"](): string;
    /**
      * `选择密钥的存放位置，并挑选识光可调用的模型。`
      */
    ["com.affine.settings.workspace.byok.modal.connect-description"](): string;
    /**
      * `添加模型`
      */
    ["com.affine.settings.workspace.byok.modal.add-model-title"](): string;
    /**
      * `添加自定义模型`
      */
    ["com.affine.settings.workspace.byok.modal.add-custom-model-title"](): string;
    /**
      * `编辑模型`
      */
    ["com.affine.settings.workspace.byok.modal.edit-model-title"](): string;
    /**
      * `选择一个或多个该密钥可调用的模型。`
      */
    ["com.affine.settings.workspace.byok.modal.catalog-model-description"](): string;
    /**
      * `填写接口模型 ID，并选择它的用途。`
      */
    ["com.affine.settings.workspace.byok.modal.custom-model-description"](): string;
    /**
      * `连接`
      */
    ["com.affine.settings.workspace.byok.section.connection"](): string;
    /**
      * `模型`
      */
    ["com.affine.settings.workspace.byok.section.models"](): string;
    /**
      * `高级信息`
      */
    ["com.affine.settings.workspace.byok.section.advanced"](): string;
    /**
      * `该密钥可调用的模型。`
      */
    ["com.affine.settings.workspace.byok.models.description.selected"](): string;
    /**
      * `在兼容模型中，已启用的模型按自上而下顺序依次尝试。`
      */
    ["com.affine.settings.workspace.byok.models.description.order"](): string;
    /**
      * `还没有添加任何模型。`
      */
    ["com.affine.settings.workspace.byok.models.empty"](): string;
    /**
      * `所有可用模型均已添加。`
      */
    ["com.affine.settings.workspace.byok.models.all-added"](): string;
    /**
      * `没有匹配的模型。`
      */
    ["com.affine.settings.workspace.byok.models.no-search-results"](): string;
    /**
      * `服务商`
      */
    ["com.affine.settings.workspace.byok.field.provider"](): string;
    /**
      * `密钥名称`
      */
    ["com.affine.settings.workspace.byok.field.key-name"](): string;
    /**
      * `描述`
      */
    ["com.affine.settings.workspace.byok.field.description"](): string;
    /**
      * `启用该服务商`
      */
    ["com.affine.settings.workspace.byok.field.provider-enabled"](): string;
    /**
      * `API key`
      */
    ["com.affine.settings.workspace.byok.field.api-key"](): string;
    /**
      * `Endpoint`
      */
    ["com.affine.settings.workspace.byok.field.endpoint"](): string;
    /**
      * `接口类型`
      */
    ["com.affine.settings.workspace.byok.field.dialect"](): string;
    /**
      * `模型 ID`
      */
    ["com.affine.settings.workspace.byok.field.model-id"](): string;
    /**
      * `服务器管理员已禁用自定义端点。请在自托管管理后台启用 copilot.byok.allowCustomEndpoint。`
      */
    ["com.affine.settings.workspace.byok.endpoint.custom-disabled"](): string;
    /**
      * `私有网络端点还需要服务器管理员启用 copilot.byok.allowPrivateEndpoint。`
      */
    ["com.affine.settings.workspace.byok.endpoint.private-disabled"](): string;
    /**
      * `留空则保留当前密钥`
      */
    ["com.affine.settings.workspace.byok.placeholder.keep-current-key"](): string;
    /**
      * `模型 ID`
      */
    ["com.affine.settings.workspace.byok.placeholder.model-id"](): string;
    /**
      * `搜索模型…`
      */
    ["com.affine.settings.workspace.byok.placeholder.search-models"](): string;
    /**
      * `选择接口类型`
      */
    ["com.affine.settings.workspace.byok.placeholder.dialect"](): string;
    /**
      * `使用自定义兼容接口`
      */
    ["com.affine.settings.workspace.byok.endpoint.use-custom"](): string;
    /**
      * `Responses 接口`
      */
    ["com.affine.settings.workspace.byok.dialect.responses"](): string;
    /**
      * `Chat Completions 接口`
      */
    ["com.affine.settings.workspace.byok.dialect.chat-completions"](): string;
    /**
      * `测试时同时发起一次图像生成请求（可能产生服务商费用）`
      */
    ["com.affine.settings.workspace.byok.probe.include-image"](): string;
    /**
      * `连接验证通过`
      */
    ["com.affine.settings.workspace.byok.probe.verified"](): string;
    /**
      * `连接失败`
      */
    ["com.affine.settings.workspace.byok.probe.failed"](): string;
    /**
      * `推荐`
      */
    ["com.affine.settings.workspace.byok.model.recommended"](): string;
    /**
      * `该模型已添加。`
      */
    ["com.affine.settings.workspace.byok.model.duplicate-id"](): string;
    /**
      * `未测试`
      */
    ["com.affine.settings.workspace.byok.model.status.not-tested"](): string;
    /**
      * `已验证`
      */
    ["com.affine.settings.workspace.byok.model.status.verified"](): string;
    /**
      * `验证失败`
      */
    ["com.affine.settings.workspace.byok.model.status.failed"](): string;
    /**
      * `部分验证通过 · {{verified}}/{{total}}`
      */
    ["com.affine.settings.workspace.byok.model.status.partially-verified"](options: Readonly<{
        verified: string;
        total: string;
    }>): string;
    /**
      * `已停用`
      */
    ["com.affine.settings.workspace.byok.model.status.disabled"](): string;
    /**
      * `模型用途`
      */
    ["com.affine.settings.workspace.byok.model.use-this-for"](): string;
    /**
      * `对话与写作`
      */
    ["com.affine.settings.workspace.byok.model.use.chat"](): string;
    /**
      * `快捷操作`
      */
    ["com.affine.settings.workspace.byok.model.use.actions"](): string;
    /**
      * `结构化输出`
      */
    ["com.affine.settings.workspace.byok.model.use.structured"](): string;
    /**
      * `图像理解`
      */
    ["com.affine.settings.workspace.byok.model.use.vision"](): string;
    /**
      * `图像生成`
      */
    ["com.affine.settings.workspace.byok.model.use.image"](): string;
    /**
      * `语音转写`
      */
    ["com.affine.settings.workspace.byok.model.use.transcript"](): string;
    /**
      * `工作区索引`
      */
    ["com.affine.settings.workspace.byok.model.use.embedding"](): string;
    /**
      * `搜索重排`
      */
    ["com.affine.settings.workspace.byok.model.use.rerank"](): string;
    /**
      * `添加密钥`
      */
    ["com.affine.settings.workspace.byok.action.add-key"](): string;
    /**
      * `测试连接`
      */
    ["com.affine.settings.workspace.byok.action.test-connection"](): string;
    /**
      * `测试`
      */
    ["com.affine.settings.workspace.byok.action.test"](): string;
    /**
      * `测试中…`
      */
    ["com.affine.settings.workspace.byok.action.testing"](): string;
    /**
      * `取消`
      */
    ["com.affine.settings.workspace.byok.action.cancel"](): string;
    /**
      * `连接`
      */
    ["com.affine.settings.workspace.byok.action.connect"](): string;
    /**
      * `连接中…`
      */
    ["com.affine.settings.workspace.byok.action.connecting"](): string;
    /**
      * `保存修改`
      */
    ["com.affine.settings.workspace.byok.action.save-changes"](): string;
    /**
      * `添加模型`
      */
    ["com.affine.settings.workspace.byok.action.add-model"](): string;
    /**
      * `添加 {{count}} 个模型`
      */
    ["com.affine.settings.workspace.byok.action.add-selected-models"](options: {
        readonly count: string;
    }): string;
    /**
      * `保存模型`
      */
    ["com.affine.settings.workspace.byok.action.save-model"](): string;
    /**
      * `启用 {{model}}`
      */
    ["com.affine.settings.workspace.byok.action.enable-model"](options: {
        readonly model: string;
    }): string;
    /**
      * `停用 {{model}}`
      */
    ["com.affine.settings.workspace.byok.action.disable-model"](options: {
        readonly model: string;
    }): string;
    /**
      * `{{model}} 的选项`
      */
    ["com.affine.settings.workspace.byok.action.model-options"](options: {
        readonly model: string;
    }): string;
    /**
      * `上移`
      */
    ["com.affine.settings.workspace.byok.action.move-up"](): string;
    /**
      * `下移`
      */
    ["com.affine.settings.workspace.byok.action.move-down"](): string;
    /**
      * `移除`
      */
    ["com.affine.settings.workspace.byok.action.remove"](): string;
    /**
      * `清空所有 BYOK 密钥`
      */
    ["com.affine.settings.workspace.byok.action.clear-all"](): string;
    /**
      * `重新排序`
      */
    ["com.affine.settings.workspace.byok.action.reorder"](): string;
    /**
      * `编辑`
      */
    ["com.affine.settings.workspace.byok.action.edit"](): string;
    /**
      * `删除`
      */
    ["com.affine.settings.workspace.byok.action.delete"](): string;
    /**
      * `密钥测试失败`
      */
    ["com.affine.settings.workspace.byok.notify.test-failed.title"](): string;
    /**
      * `本地密钥未保存`
      */
    ["com.affine.settings.workspace.byok.notify.local-save-failed.title"](): string;
    /**
      * `安全设备存储不可用。`
      */
    ["com.affine.settings.workspace.byok.notify.local-save-failed.message"](): string;
    /**
      * `BYOK 设置未加载`
      */
    ["com.affine.settings.workspace.byok.notify.load-failed.title"](): string;
    /**
      * `BYOK 密钥未保存`
      */
    ["com.affine.settings.workspace.byok.notify.save-failed.title"](): string;
    /**
      * `BYOK 密钥未删除`
      */
    ["com.affine.settings.workspace.byok.notify.delete-failed.title"](): string;
    /**
      * `BYOK 密钥未重新排序`
      */
    ["com.affine.settings.workspace.byok.notify.reorder-failed.title"](): string;
    /**
      * `BYOK 密钥未清空`
      */
    ["com.affine.settings.workspace.byok.notify.clear-failed.title"](): string;
    /**
      * `BYOK 设置已变化`
      */
    ["com.affine.settings.workspace.byok.notify.reload-required.title"](): string;
    /**
      * `请重新加载设置后再试。`
      */
    ["com.affine.settings.workspace.byok.notify.reload-required.message"](): string;
    /**
      * `请稍后重试。`
      */
    ["com.affine.settings.workspace.byok.notify.operation-failed.message"](): string;
    /**
      * `不能跨存储排序`
      */
    ["com.affine.settings.workspace.byok.notify.cross-storage-reorder.title"](): string;
    /**
      * `本地密钥和服务端密钥会保留各自独立的回退顺序。`
      */
    ["com.affine.settings.workspace.byok.notify.cross-storage-reorder.message"](): string;
    /**
      * `实验性功能`
      */
    ["com.affine.settings.workspace.experimental-features"](): string;
    /**
      * `开始使用`
      */
    ["com.affine.settings.workspace.experimental-features.get-started"](): string;
    /**
      * `实验性功能`
      */
    ["com.affine.settings.workspace.experimental-features.header.plugins"](): string;
    /**
      * `部分功能可供抢先体验`
      */
    ["com.affine.settings.workspace.experimental-features.header.subtitle"](): string;
    /**
      * `我已明确风险，并且愿意继续使用它。`
      */
    ["com.affine.settings.workspace.experimental-features.prompt-disclaimer"](): string;
    /**
      * `您想使用处于实验阶段的插件系统吗？`
      */
    ["com.affine.settings.workspace.experimental-features.prompt-header"](): string;
    /**
      * `您即将启用一项实验性功能。 此功能仍在开发中，可能包含错误或行为不可预测。 请谨慎行事并自行承担风险。`
      */
    ["com.affine.settings.workspace.experimental-features.prompt-warning"](): string;
    /**
      * `警告`
      */
    ["com.affine.settings.workspace.experimental-features.prompt-warning-title"](): string;
    /**
      * `启用 AI`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai.name"](): string;
    /**
      * `启用或禁用所有 AI 功能。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai.description"](): string;
    /**
      * `启用 AI 网络搜索`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-network-search.name"](): string;
    /**
      * `启用或禁用 AI 网络搜索功能。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-network-search.description"](): string;
    /**
      * `启用AI模型切换`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-model-switch.name"](): string;
    /**
      * `启用或禁用 AI 模型切换功能。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-model-switch.description"](): string;
    /**
      * `启用 AI Playground`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-playground.name"](): string;
    /**
      * `启用或禁用 AI Playground 功能。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-playground.description"](): string;
    /**
      * `文档数据库全宽`
      */
    ["com.affine.settings.workspace.experimental-features.enable-database-full-width.name"](): string;
    /**
      * `文档中的数据库将以全宽模式显示。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-database-full-width.description"](): string;
    /**
      * `文档数据库附件备注`
      */
    ["com.affine.settings.workspace.experimental-features.enable-database-attachment-note.name"](): string;
    /**
      * `允许为文档的数据库附件添加备注。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-database-attachment-note.description"](): string;
    /**
      * `Todo 块查询`
      */
    ["com.affine.settings.workspace.experimental-features.enable-block-query.name"](): string;
    /**
      * `启用 todo 块的查询。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-block-query.description"](): string;
    /**
      * `同步文档块`
      */
    ["com.affine.settings.workspace.experimental-features.enable-synced-doc-block.name"](): string;
    /**
      * `启用文档块同步。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-synced-doc-block.description"](): string;
    /**
      * `无界文本`
      */
    ["com.affine.settings.workspace.experimental-features.enable-edgeless-text.name"](): string;
    /**
      * `启用无界文本块。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-edgeless-text.description"](): string;
    /**
      * `颜色选择器`
      */
    ["com.affine.settings.workspace.experimental-features.enable-color-picker.name"](): string;
    /**
      * `启用颜色选择器块。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-color-picker.description"](): string;
    /**
      * `AI聊天块`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-chat-block.name"](): string;
    /**
      * `启用 AI 聊天块。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-chat-block.description"](): string;
    /**
      * `AI 入门`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-onboarding.name"](): string;
    /**
      * `启用AI入门。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-onboarding.description"](): string;
    /**
      * `思维导图导入`
      */
    ["com.affine.settings.workspace.experimental-features.enable-mind-map-import.name"](): string;
    /**
      * `启用思维导图导入。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-mind-map-import.description"](): string;
    /**
      * `块元数据`
      */
    ["com.affine.settings.workspace.experimental-features.enable-block-meta.name"](): string;
    /**
      * `启用后，所有块将具有创建时间、更新时间、创建者和更新者。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-block-meta.description"](): string;
    /**
      * `标注`
      */
    ["com.affine.settings.workspace.experimental-features.enable-callout.name"](): string;
    /**
      * `让您的文字脱颖而出。这也包括转录块中的标注。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-callout.description"](): string;
    /**
      * `嵌入 Iframe 块`
      */
    ["com.affine.settings.workspace.experimental-features.enable-embed-iframe-block.name"](): string;
    /**
      * `启用嵌入Iframe块。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-embed-iframe-block.description"](): string;
    /**
      * `Emoji 文件夹图标`
      */
    ["com.affine.settings.workspace.experimental-features.enable-emoji-folder-icon.name"](): string;
    /**
      * `启用后，您可以将表情符号用作文件夹图标。当文件夹名称的第一个字符是表情符号时，该表情符号将被提取并用作其图标。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-emoji-folder-icon.description"](): string;
    /**
      * `Emoji 文档图标`
      */
    ["com.affine.settings.workspace.experimental-features.enable-emoji-doc-icon.name"](): string;
    /**
      * `启用后，您可以使用表情符号作为文档图标。当文档名称的第一个字符是表情符号时，它将被提取并用作其图标。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-emoji-doc-icon.description"](): string;
    /**
      * `编辑器设置`
      */
    ["com.affine.settings.workspace.experimental-features.enable-editor-settings.name"](): string;
    /**
      * `启用编辑器设置。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-editor-settings.description"](): string;
    /**
      * `主题编辑器`
      */
    ["com.affine.settings.workspace.experimental-features.enable-theme-editor.name"](): string;
    /**
      * `启用主题编辑器功能。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-theme-editor.description"](): string;
    /**
      * `允许创建本地工作区`
      */
    ["com.affine.settings.workspace.experimental-features.enable-local-workspace.name"](): string;
    /**
      * `允许创建本地工作区`
      */
    ["com.affine.settings.workspace.experimental-features.enable-local-workspace.description"](): string;
    /**
      * `高级块可见性控制`
      */
    ["com.affine.settings.workspace.experimental-features.enable-advanced-block-visibility.name"](): string;
    /**
      * `提供详细的控制，以决定在页面模式下哪些无界块可见。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-advanced-block-visibility.description"](): string;
    /**
      * `移动键盘工具栏`
      */
    ["com.affine.settings.workspace.experimental-features.enable-mobile-keyboard-toolbar.name"](): string;
    /**
      * `启用移动端键盘工具栏。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-mobile-keyboard-toolbar.description"](): string;
    /**
      * `移动端链接文档小部件`
      */
    ["com.affine.settings.workspace.experimental-features.enable-mobile-linked-doc-menu.name"](): string;
    /**
      * `启用移动端关联文档菜单。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-mobile-linked-doc-menu.description"](): string;
    /**
      * `启用快照导入导出`
      */
    ["com.affine.settings.workspace.experimental-features.enable-snapshot-import-export.name"](): string;
    /**
      * `启用后，用户可以导入和导出 blocksuite 快照。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-snapshot-import-export.description"](): string;
    /**
      * `启用无界`
      */
    ["com.affine.settings.workspace.experimental-features.enable-mobile-edgeless-editing.name"](): string;
    /**
      * `一旦启用，用户就可以编辑无界。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-mobile-edgeless-editing.description"](): string;
    /**
      * `PDF 嵌入式预览`
      */
    ["com.affine.settings.workspace.experimental-features.enable-pdf-embed-preview.name"](): string;
    /**
      * `一旦启用，您可以在嵌入视图中预览 PDF。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-pdf-embed-preview.description"](): string;
    /**
      * `音频块`
      */
    ["com.affine.settings.workspace.experimental-features.enable-audio-block.name"](): string;
    /**
      * `音频块允许您在全球播放音频文件并向其添加注释。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-audio-block.description"](): string;
    /**
      * `会议`
      */
    ["com.affine.settings.workspace.experimental-features.enable-meetings.name"](): string;
    /**
      * `会议功能允许您录制和转录会议内容。别忘了在 识光 设置中启用此功能。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-meetings.description"](): string;
    /**
      * `编辑器 RTL 模式`
      */
    ["com.affine.settings.workspace.experimental-features.enable-editor-rtl.name"](): string;
    /**
      * `启用后，编辑器将以 RTL 模式显示。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-editor-rtl.description"](): string;
    /**
      * `无界涂鸦风格`
      */
    ["com.affine.settings.workspace.experimental-features.enable-edgeless-scribbled-style.name"](): string;
    /**
      * `启用后，您可以在无界模式下使用涂鸦风格。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-edgeless-scribbled-style.description"](): string;
    /**
      * `数据库块的表视图和虚拟滚动`
      */
    ["com.affine.settings.workspace.experimental-features.enable-table-virtual-scroll.name"](): string;
    /**
      * `启用后，将数据库块中的表视图切换为虚拟滚动模式。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-table-virtual-scroll.description"](): string;
    /**
      * `代码块 HTML 预览`
      */
    ["com.affine.settings.workspace.experimental-features.enable-code-block-html-preview.name"](): string;
    /**
      * `一旦启用，您可以在代码块中预览 HTML。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-code-block-html-preview.description"](): string;
    /**
      * `适配器面板`
      */
    ["com.affine.settings.workspace.experimental-features.enable-adapter-panel.name"](): string;
    /**
      * `启用后，您可以在右侧栏中预览适配器导出内容。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-adapter-panel.description"](): string;
    /**
      * `发送详细的对象信息给AI`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-send-detailed-object.name"](): string;
    /**
      * `关闭此选项后，每次选择“继续使用 AI”，AI 只会获取屏幕截图。`
      */
    ["com.affine.settings.workspace.experimental-features.enable-ai-send-detailed-object.description"](): string;
    /**
      * `只有所有者才能编辑工作区头像和名称。更改将向所有人显示。`
      */
    ["com.affine.settings.workspace.not-owner"](): string;
    /**
      * `偏好设置`
      */
    ["com.affine.settings.workspace.preferences"](): string;
    /**
      * `团队账单`
      */
    ["com.affine.settings.workspace.billing"](): string;
    /**
      * `团队空间`
      */
    ["com.affine.settings.workspace.billing.team-workspace"](): string;
    /**
      * `您的工作区正处于免费试用期。`
      */
    ["com.affine.settings.workspace.billing.team-workspace.description.free-trail"](): string;
    /**
      * `您的工作空间将按年计费。`
      */
    ["com.affine.settings.workspace.billing.team-workspace.description.billed.annually"](): string;
    /**
      * `您的工作空间将按月计费。`
      */
    ["com.affine.settings.workspace.billing.team-workspace.description.billed.monthly"](): string;
    /**
      * `您的订阅将于 {{date}} 到期`
      */
    ["com.affine.settings.workspace.billing.team-workspace.not-renewed"](options: {
        readonly date: string;
    }): string;
    /**
      * `下次计费日期为：{{date}}`
      */
    ["com.affine.settings.workspace.billing.team-workspace.next-billing-date"](options: {
        readonly date: string;
    }): string;
    /**
      * `取消计划`
      */
    ["com.affine.settings.workspace.billing.team-workspace.cancel-plan"](): string;
    /**
      * `许可证`
      */
    ["com.affine.settings.workspace.license"](): string;
    /**
      * `管理自托管团队工作区的许可证信息和发票。`
      */
    ["com.affine.settings.workspace.license.description"](): string;
    /**
      * `为您的自托管工作区购买团队计划。`
      */
    ["com.affine.settings.workspace.license.benefit.team.title"](): string;
    /**
      * `需要更多座位吗？最适合可扩展的团队。`
      */
    ["com.affine.settings.workspace.license.benefit.team.subtitle"](): string;
    /**
      * `一切都在自托管 FOSS 中`
      */
    ["com.affine.settings.workspace.license.benefit.team.g1"](): string;
    /**
      * `{{initialQuota}} 初始存储 + {{quotaPerSeat}} 每个席位`
      */
    ["com.affine.settings.workspace.license.benefit.team.g2"](options: Readonly<{
        initialQuota: string;
        quotaPerSeat: string;
    }>): string;
    /**
      * `{{quota}} 的最大文件大小`
      */
    ["com.affine.settings.workspace.license.benefit.team.g3"](options: {
        readonly quota: string;
    }): string;
    /**
      * `无限团队成员（10+席位）`
      */
    ["com.affine.settings.workspace.license.benefit.team.g4"](): string;
    /**
      * `多个管理员`
      */
    ["com.affine.settings.workspace.license.benefit.team.g5"](): string;
    /**
      * `优先客户支持`
      */
    ["com.affine.settings.workspace.license.benefit.team.g6"](): string;
    /**
      * `了解更多`
      */
    ["com.affine.settings.workspace.license.learn-more"](): string;
    /**
      * `自托管工作区`
      */
    ["com.affine.settings.workspace.license.self-host"](): string;
    /**
      * `自托管团队工作区`
      */
    ["com.affine.settings.workspace.license.self-host-team"](): string;
    /**
      * `该许可证将于 {{expirationDate}} 到期，剩余 {{leftDays}} 天。`
      */
    ["com.affine.settings.workspace.license.self-host-team.team.description"](options: Readonly<{
        expirationDate: string;
        leftDays: string;
    }>): string;
    /**
      * `基础版本：{{memberCount}} 个席位。更多信息，请购买或使用激活码。`
      */
    ["com.affine.settings.workspace.license.self-host-team.free.description"](options: {
        readonly memberCount: string;
    }): string;
    /**
      * `席位`
      */
    ["com.affine.settings.workspace.license.self-host-team.seats"](): string;
    /**
      * `使用已购密钥`
      */
    ["com.affine.settings.workspace.license.self-host-team.use-purchased-key"](): string;
    /**
      * `上传许可证文件`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file"](): string;
    /**
      * `在本地上传许可证文件并验证许可证信息。`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.description"](): string;
    /**
      * `要购买许可证：`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.tips.title"](): string;
    /**
      * `工作区 ID`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.tips.workspace-id"](): string;
    /**
      * `点击上传`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.click-to-upload"](): string;
    /**
      * `激活失败`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.failed"](): string;
    /**
      * `激活成功`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.success.title"](): string;
    /**
      * `许可证已成功应用`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.success.description"](): string;
    /**
      * `如果您遇到任何问题，请联系 support@toeverything.info。`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.help"](): string;
    /**
      * `停用`
      */
    ["com.affine.settings.workspace.license.self-host-team.deactivate-license"](): string;
    /**
      * `替换您的许可证文件`
      */
    ["com.affine.settings.workspace.license.self-host-team.replace-license.title"](): string;
    /**
      * `将现有的许可证文件替换为一个更新的版本。`
      */
    ["com.affine.settings.workspace.license.self-host-team.replace-license.description"](): string;
    /**
      * `上传许可证文件`
      */
    ["com.affine.settings.workspace.license.self-host-team.replace-license.upload"](): string;
    /**
      * `购买更多席位`
      */
    ["com.affine.settings.workspace.license.buy-more-seat"](): string;
    /**
      * `激活许可证`
      */
    ["com.affine.settings.workspace.license.activate-modal.title"](): string;
    /**
      * `输入许可证密钥以激活此自托管工作区。`
      */
    ["com.affine.settings.workspace.license.activate-modal.description"](): string;
    /**
      * `许可证激活成功。`
      */
    ["com.affine.settings.workspace.license.activate-success"](): string;
    /**
      * `确认停用？`
      */
    ["com.affine.settings.workspace.license.deactivate-modal.title"](): string;
    /**
      * `停用后，您需要上传新许可证以继续使用团队功能`
      */
    ["com.affine.settings.workspace.license.deactivate-modal.description-license"](): string;
    /**
      * `管理付款`
      */
    ["com.affine.settings.workspace.license.deactivate-modal.manage-payment"](): string;
    /**
      * `许可证已成功停用。`
      */
    ["com.affine.settings.workspace.license.deactivate-success"](): string;
    /**
      * `本地`
      */
    ["com.affine.settings.workspace.state.local"](): string;
    /**
      * `通过 识光 Cloud 同步`
      */
    ["com.affine.settings.workspace.state.sync-affine-cloud"](): string;
    /**
      * `自托管服务器`
      */
    ["com.affine.settings.workspace.state.self-hosted"](): string;
    /**
      * `加入的工作区`
      */
    ["com.affine.settings.workspace.state.joined"](): string;
    /**
      * `离线可用`
      */
    ["com.affine.settings.workspace.state.available-offline"](): string;
    /**
      * `公开到互联网`
      */
    ["com.affine.settings.workspace.state.published"](): string;
    /**
      * `团队空间`
      */
    ["com.affine.settings.workspace.state.team"](): string;
    /**
      * `属性`
      */
    ["com.affine.settings.workspace.properties"](): string;
    /**
      * `添加属性`
      */
    ["com.affine.settings.workspace.properties.add_property"](): string;
    /**
      * `全部`
      */
    ["com.affine.settings.workspace.properties.all"](): string;
    /**
      * `删除属性`
      */
    ["com.affine.settings.workspace.properties.delete-property"](): string;
    /**
      * `编辑属性`
      */
    ["com.affine.settings.workspace.properties.edit-property"](): string;
    /**
      * `通用属性`
      */
    ["com.affine.settings.workspace.properties.general-properties"](): string;
    /**
      * `属性`
      */
    ["com.affine.settings.workspace.properties.header.title"](): string;
    /**
      * `使用中`
      */
    ["com.affine.settings.workspace.properties.in-use"](): string;
    /**
      * `只读属性`
      */
    ["com.affine.settings.workspace.properties.readonly-properties"](): string;
    /**
      * `必选属性`
      */
    ["com.affine.settings.workspace.properties.required-properties"](): string;
    /**
      * `设置为必选属性`
      */
    ["com.affine.settings.workspace.properties.set-as-required"](): string;
    /**
      * `未使用`
      */
    ["com.affine.settings.workspace.properties.unused"](): string;
    /**
      * `您可以在此处查看当前工作区的存储和文件。`
      */
    ["com.affine.settings.workspace.storage.subtitle"](): string;
    /**
      * `启用 识光 同步以发布此工作区`
      */
    ["com.affine.settings.workspace.publish-tooltip"](): string;
    /**
      * `分享`
      */
    ["com.affine.settings.workspace.sharing.title"](): string;
    /**
      * `允许 Slack 和其他社交应用程序展开 URL，即使文档仅由工作区成员访问。`
      */
    ["com.affine.settings.workspace.sharing.url-preview.description"](): string;
    /**
      * `始终启用 URL 预览`
      */
    ["com.affine.settings.workspace.sharing.url-preview.title"](): string;
    /**
      * `控制此工作区中的页面是否可以公开分享。关闭后将阻止新的分享，并禁止外部访问现有分享。`
      */
    ["com.affine.settings.workspace.sharing.workspace-sharing.description"](): string;
    /**
      * `允许工作区页面分享`
      */
    ["com.affine.settings.workspace.sharing.workspace-sharing.title"](): string;
    /**
      * `识光 AI`
      */
    ["com.affine.settings.workspace.affine-ai.title"](): string;
    /**
      * `启用 识光 AI 助手`
      */
    ["com.affine.settings.workspace.affine-ai.label"](): string;
    /**
      * `允许工作区成员使用 识光 AI 功能。此设置不会影响计费。工作区成员通过个人帐户使用 识光 AI。`
      */
    ["com.affine.settings.workspace.affine-ai.description"](): string;
    /**
      * `归档工作区`
      */
    ["com.affine.settings.workspace.backup"](): string;
    /**
      * `管理已归档的本地工作区文件`
      */
    ["com.affine.settings.workspace.backup.subtitle"](): string;
    /**
      * `未找到已归档的工作区文件`
      */
    ["com.affine.settings.workspace.backup.empty"](): string;
    /**
      * `删除已归档工作区`
      */
    ["com.affine.settings.workspace.backup.delete"](): string;
    /**
      * `您确定要删除此工作区吗？此操作无法撤销。在继续之前，请确保您不再需要它们。`
      */
    ["com.affine.settings.workspace.backup.delete.warning"](): string;
    /**
      * `工作区备份删除成功`
      */
    ["com.affine.settings.workspace.backup.delete.success"](): string;
    /**
      * `工作区启用成功`
      */
    ["com.affine.settings.workspace.backup.import.success"](): string;
    /**
      * `启用本地工作区`
      */
    ["com.affine.settings.workspace.backup.import"](): string;
    /**
      * `打开`
      */
    ["com.affine.settings.workspace.backup.import.success.action"](): string;
    /**
      * `已于{{date}} {{time}}删除`
      */
    ["com.affine.settings.workspace.backup.delete-at"](options: Readonly<{
        date: string;
        time: string;
    }>): string;
    /**
      * `索引器与嵌入`
      */
    ["com.affine.settings.workspace.indexer-embedding.title"](): string;
    /**
      * `管理识光索引和识光 AI嵌入，用于本地内容处理`
      */
    ["com.affine.settings.workspace.indexer-embedding.description"](): string;
    /**
      * `嵌入`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.title"](): string;
    /**
      * `嵌入允许AI检索您的内容。如果索引器使用本地设置，它可能会影响嵌入的一些结果。`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.description"](): string;
    /**
      * `只有工作区所有者可以启用工作区嵌入。`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.disabled-tooltip"](): string;
    /**
      * `选择文档`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.select-doc"](): string;
    /**
      * `上传文件`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.upload-file"](): string;
    /**
      * `工作区嵌入`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.switch.title"](): string;
    /**
      * `AI可以调用嵌入在工作区中的文件。`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.switch.description"](): string;
    /**
      * `启用工作区文档嵌入失败`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.switch.error"](): string;
    /**
      * `从嵌入中移除附件失败`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.remove-attachment.error"](): string;
    /**
      * `更新已忽略的文档失败`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.update-ignored-docs.error"](): string;
    /**
      * `嵌入进度`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.progress.title"](): string;
    /**
      * `同步中`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.progress.syncing"](): string;
    /**
      * `已同步`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.progress.synced"](): string;
    /**
      * `正在加载同步状态...`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.progress.loading-sync-status"](): string;
    /**
      * `忽略文档`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.ignore-docs.title"](): string;
    /**
      * `被忽略的文档将不会嵌入到当前工作区。`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.ignore-docs.description"](): string;
    /**
      * `附加附件`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.additional-attachments.title"](): string;
    /**
      * `上传的文件将嵌入到当前工作区中。`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.additional-attachments.description"](): string;
    /**
      * `要从嵌入中移除附件吗？`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.additional-attachments.remove-attachment.title"](): string;
    /**
      * `附件将被移除。AI 将不会继续从该附件提取内容。`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.additional-attachments.remove-attachment.description"](): string;
    /**
      * `删除文件`
      */
    ["com.affine.settings.workspace.indexer-embedding.embedding.additional-attachments.remove-attachment.tooltip"](): string;
    /**
      * `共享文档需要开启 识光 同步。`
      */
    ["com.affine.share-menu.EnableCloudDescription"](): string;
    /**
      * `分享模式`
      */
    ["com.affine.share-menu.ShareMode"](): string;
    /**
      * `分享文档`
      */
    ["com.affine.share-menu.SharePage"](): string;
    /**
      * `通用控制`
      */
    ["com.affine.share-menu.generalAccess"](): string;
    /**
      * `通过导出分享`
      */
    ["com.affine.share-menu.ShareViaExport"](): string;
    /**
      * `下载文档的静态副本以与他人分享。`
      */
    ["com.affine.share-menu.ShareViaExportDescription"](): string;
    /**
      * `打印副本`
      */
    ["com.affine.share-menu.ShareViaPrintDescription"](): string;
    /**
      * `通过链接分享`
      */
    ["com.affine.share-menu.ShareWithLink"](): string;
    /**
      * `创建一个链接，便于与任何人分享。访问者将以文档形式打开您的文档。`
      */
    ["com.affine.share-menu.ShareWithLinkDescription"](): string;
    /**
      * `已分享文档`
      */
    ["com.affine.share-menu.SharedPage"](): string;
    /**
      * `复制链接`
      */
    ["com.affine.share-menu.copy"](): string;
    /**
      * `复制私密链接`
      */
    ["com.affine.share-menu.copy-private-link"](): string;
    /**
      * `复制所选块的链接`
      */
    ["com.affine.share-menu.copy.block"](): string;
    /**
      * `复制无界模式链接`
      */
    ["com.affine.share-menu.copy.edgeless"](): string;
    /**
      * `复制选定框架链接`
      */
    ["com.affine.share-menu.copy.frame"](): string;
    /**
      * `复制页面模式链接`
      */
    ["com.affine.share-menu.copy.page"](): string;
    /**
      * `您可以通过链接分享这份文档。`
      */
    ["com.affine.share-menu.create-public-link.notification.success.message"](): string;
    /**
      * `已创建公开分享链接`
      */
    ["com.affine.share-menu.create-public-link.notification.success.title"](): string;
    /**
      * `请稍后再试。`
      */
    ["com.affine.share-menu.disable-publish-link.notification.fail.message"](): string;
    /**
      * `禁用公开分享链接失败`
      */
    ["com.affine.share-menu.disable-publish-link.notification.fail.title"](): string;
    /**
      * `这篇文档不再公开分享了。`
      */
    ["com.affine.share-menu.disable-publish-link.notification.success.message"](): string;
    /**
      * `已禁用公开分享链接`
      */
    ["com.affine.share-menu.disable-publish-link.notification.success.title"](): string;
    /**
      * `管理工作区成员`
      */
    ["com.affine.share-menu.navigate.workspace"](): string;
    /**
      * `任何人`
      */
    ["com.affine.share-menu.option.link.label"](): string;
    /**
      * `禁止访问`
      */
    ["com.affine.share-menu.option.link.no-access"](): string;
    /**
      * `只有此工作区的成员可以打开此链接。`
      */
    ["com.affine.share-menu.option.link.no-access.description"](): string;
    /**
      * `只读`
      */
    ["com.affine.share-menu.option.link.readonly"](): string;
    /**
      * `任何人可以访问该链接`
      */
    ["com.affine.share-menu.option.link.readonly.description"](): string;
    /**
      * `此工作区已关闭分享。请联系管理员启用。`
      */
    ["com.affine.share-menu.workspace-sharing.disabled.tooltip"](): string;
    /**
      * `可管理`
      */
    ["com.affine.share-menu.option.permission.can-manage"](): string;
    /**
      * `可编辑`
      */
    ["com.affine.share-menu.option.permission.can-edit"](): string;
    /**
      * `可阅读`
      */
    ["com.affine.share-menu.option.permission.can-read"](): string;
    /**
      * `禁止访问`
      */
    ["com.affine.share-menu.option.permission.no-access"](): string;
    /**
      * `工作区中的成员`
      */
    ["com.affine.share-menu.option.permission.label"](): string;
    /**
      * `工作区管理员和所有者自动拥有管理权限。`
      */
    ["com.affine.share-menu.option.permission.tips"](): string;
    /**
      * `发布至网页`
      */
    ["com.affine.share-menu.publish-to-web"](): string;
    /**
      * `私密分享`
      */
    ["com.affine.share-menu.share-privately"](): string;
    /**
      * `分享`
      */
    ["com.affine.share-menu.shareButton"](): string;
    /**
      * `已分享`
      */
    ["com.affine.share-menu.sharedButton"](): string;
    /**
      * `{{member1}} 和 {{member2}}`
      */
    ["com.affine.share-menu.member-management.member-count-2"](options: Readonly<{
        member1: string;
        member2: string;
    }>): string;
    /**
      * `{{member1}}、{{member2}} 和 {{member3}}`
      */
    ["com.affine.share-menu.member-management.member-count-3"](options: Readonly<{
        member1: string;
        member2: string;
        member3: string;
    }>): string;
    /**
      * `{{member1}}、{{member2}} 和 {{memberCount}} 人`
      */
    ["com.affine.share-menu.member-management.member-count-more"](options: Readonly<{
        member1: string;
        member2: string;
        memberCount: string;
    }>): string;
    /**
      * `移除`
      */
    ["com.affine.share-menu.member-management.remove"](): string;
    /**
      * `设置为所有者`
      */
    ["com.affine.share-menu.member-management.set-as-owner"](): string;
    /**
      * `将此人设置为所有者？`
      */
    ["com.affine.share-menu.member-management.set-as-owner.confirm.title"](): string;
    /**
      * `新所有者将立即生效，如果其他用户将您移除，您可能会失去对此文档的访问权限，请确认。`
      */
    ["com.affine.share-menu.member-management.set-as-owner.confirm.description"](): string;
    /**
      * `权限已更新`
      */
    ["com.affine.share-menu.member-management.update-success"](): string;
    /**
      * `权限更新失败`
      */
    ["com.affine.share-menu.member-management.update-fail"](): string;
    /**
      * `文档中有{{memberCount}}位协作者`
      */
    ["com.affine.share-menu.member-management.header"](options: {
        readonly memberCount: string;
    }): string;
    /**
      * `添加协作者`
      */
    ["com.affine.share-menu.member-management.add-collaborators"](): string;
    /**
      * `发送邀请`
      */
    ["com.affine.share-menu.invite-editor.header"](): string;
    /**
      * `管理成员`
      */
    ["com.affine.share-menu.invite-editor.manage-members"](): string;
    /**
      * `邀请`
      */
    ["com.affine.share-menu.invite-editor.invite"](): string;
    /**
      * `未找到结果`
      */
    ["com.affine.share-menu.invite-editor.no-found"](): string;
    /**
      * `邀请其他成员`
      */
    ["com.affine.share-menu.invite-editor.placeholder"](): string;
    /**
      * `通过电子邮件通知`
      */
    ["com.affine.share-menu.invite-editor.sent-email"](): string;
    /**
      * `免费计划中不提供权限`
      */
    ["com.affine.share-menu.paywall.owner.title"](): string;
    /**
      * `升级到 Pro 或更高版本以解锁此文档的权限设置。`
      */
    ["com.affine.share-menu.paywall.owner.description"](): string;
    /**
      * `升级`
      */
    ["com.affine.share-menu.paywall.owner.confirm"](): string;
    /**
      * `需要升级工作区`
      */
    ["com.affine.share-menu.paywall.member.title"](): string;
    /**
      * `请询问您的工作区所有者升级到 Pro 或更高版本以启用权限管理。`
      */
    ["com.affine.share-menu.paywall.member.description"](): string;
    /**
      * `知道了`
      */
    ["com.affine.share-menu.paywall.member.confirm"](): string;
    /**
      * `构建于`
      */
    ["com.affine.share-page.footer.built-with"](): string;
    /**
      * `创建于`
      */
    ["com.affine.share-page.footer.create-with"](): string;
    /**
      * `使用 识光 Cloud 增强您的共享能力：一键文档共享`
      */
    ["com.affine.share-page.footer.description"](): string;
    /**
      * `免费开始使用`
      */
    ["com.affine.share-page.footer.get-started"](): string;
    /**
      * `使用此模板`
      */
    ["com.affine.share-page.header.import-template"](): string;
    /**
      * `注册或登录`
      */
    ["com.affine.share-page.header.login"](): string;
    /**
      * `演示`
      */
    ["com.affine.share-page.header.present"](): string;
    /**
      * `无界`
      */
    ["com.affine.shortcutsTitle.edgeless"](): string;
    /**
      * `常规`
      */
    ["com.affine.shortcutsTitle.general"](): string;
    /**
      * `Markdown 语法`
      */
    ["com.affine.shortcutsTitle.markdownSyntax"](): string;
    /**
      * `页面`
      */
    ["com.affine.shortcutsTitle.page"](): string;
    /**
      * `折叠侧边栏`
      */
    ["com.affine.sidebarSwitch.collapse"](): string;
    /**
      * `展开侧边栏`
      */
    ["com.affine.sidebarSwitch.expand"](): string;
    /**
      * `启用快照导入导出`
      */
    ["com.affine.snapshot.import-export.enable"](): string;
    /**
      * `启用后，您可以在文档的更多菜单中找到快照导出导入选项。`
      */
    ["com.affine.snapshot.import-export.enable.desc"](): string;
    /**
      * `稍后`
      */
    ["com.affine.star-affine.cancel"](): string;
    /**
      * `在 GitHub 点亮星标`
      */
    ["com.affine.star-affine.confirm"](): string;
    /**
      * `您觉得我们的应用程序有用且有趣吗？ 我们希望得到您的支持，以不断进步！ 帮助我们的一个好方法是在 GitHub 给我们一颗星。 这个简单的行动可以给我们很大的激励，并帮助我们继续为您提供最佳体验。`
      */
    ["com.affine.star-affine.description"](): string;
    /**
      * `在 GitHub 为我们点亮星标`
      */
    ["com.affine.star-affine.title"](): string;
    /**
      * `更改`
      */
    ["com.affine.storage.change-plan"](): string;
    /**
      * `您已达到当前账户的最大容量限制`
      */
    ["com.affine.storage.maximum-tips"](): string;
    /**
      * `Pro 用户在团队版 alpha 测试期间将拥有无限存储容量`
      */
    ["com.affine.storage.maximum-tips.pro"](): string;
    /**
      * `计划`
      */
    ["com.affine.storage.plan"](): string;
    /**
      * `识光 云端存储`
      */
    ["com.affine.storage.title"](): string;
    /**
      * `升级`
      */
    ["com.affine.storage.upgrade"](): string;
    /**
      * `已使用空间`
      */
    ["com.affine.storage.used.hint"](): string;
    /**
      * `同步中`
      */
    ["com.affine.syncing"](): string;
    /**
      * `{{count}} 篇文档`
    
      * - com.affine.tags.count_one: `{{count}} 篇文档`
    
      * - com.affine.tags.count_other: `{{count}} 篇文档`
    
      * - com.affine.tags.count_zero: `{{count}} 篇文档`
      */
    ["com.affine.tags.count"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `{{count}} 篇文档`
      */
    ["com.affine.tags.count_one"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `{{count}} 篇文档`
      */
    ["com.affine.tags.count_other"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `{{count}} 篇文档`
      */
    ["com.affine.tags.count_zero"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `在这输入标签名称...`
      */
    ["com.affine.tags.create-tag.placeholder"](): string;
    /**
      * `标签已存在`
      */
    ["com.affine.tags.create-tag.toast.exist"](): string;
    /**
      * `已创建标签`
      */
    ["com.affine.tags.create-tag.toast.success"](): string;
    /**
      * `标签已删除`
      */
    ["com.affine.tags.delete-tags.toast"](): string;
    /**
      * `标签已更新`
      */
    ["com.affine.tags.edit-tag.toast.success"](): string;
    /**
      * `新建标签`
      */
    ["com.affine.tags.empty.new-tag-button"](): string;
    /**
      * `启用遥测`
      */
    ["com.affine.telemetry.enable"](): string;
    /**
      * `遥测功能使我们能够收集有关您如何使用该应用程序的数据。 这些数据有助于我们改进应用程序并提供更好的功能。`
      */
    ["com.affine.telemetry.enable.desc"](): string;
    /**
      * `深色`
      */
    ["com.affine.themeSettings.dark"](): string;
    /**
      * `浅色`
      */
    ["com.affine.themeSettings.light"](): string;
    /**
      * `跟随系统`
      */
    ["com.affine.themeSettings.system"](): string;
    /**
      * `自动`
      */
    ["com.affine.themeSettings.auto"](): string;
    /**
      * `刚刚`
      */
    ["com.affine.time.now"](): string;
    /**
      * `本月`
      */
    ["com.affine.time.this-mouth"](): string;
    /**
      * `本周`
      */
    ["com.affine.time.this-week"](): string;
    /**
      * `今年`
      */
    ["com.affine.time.this-year"](): string;
    /**
      * `今天`
      */
    ["com.affine.time.today"](): string;
    /**
      * `已成功添加链接文档`
      */
    ["com.affine.toastMessage.addLinkedPage"](): string;
    /**
      * `已添加到收藏夹`
      */
    ["com.affine.toastMessage.addedFavorites"](): string;
    /**
      * `无界模式`
      */
    ["com.affine.toastMessage.edgelessMode"](): string;
    /**
      * `已移动到垃圾箱`
      */
    ["com.affine.toastMessage.movedTrash"](): string;
    /**
      * `页面模式`
      */
    ["com.affine.toastMessage.pageMode"](): string;
    /**
      * `默认模式已更改`
      */
    ["com.affine.toastMessage.defaultMode.page.title"](): string;
    /**
      * `该文档的默认模式已更改为页面模式`
      */
    ["com.affine.toastMessage.defaultMode.page.message"](): string;
    /**
      * `默认模式已更改`
      */
    ["com.affine.toastMessage.defaultMode.edgeless.title"](): string;
    /**
      * `该文档的默认模式已更改为无界模式`
      */
    ["com.affine.toastMessage.defaultMode.edgeless.message"](): string;
    /**
      * `已永久删除`
      */
    ["com.affine.toastMessage.permanentlyDeleted"](): string;
    /**
      * `已从收藏中移除`
      */
    ["com.affine.toastMessage.removedFavorites"](): string;
    /**
      * `更名成功`
      */
    ["com.affine.toastMessage.rename"](): string;
    /**
      * `{{title}} 已恢复`
      */
    ["com.affine.toastMessage.restored"](options: {
        readonly title: string;
    }): string;
    /**
      * `删除成功`
      */
    ["com.affine.toastMessage.successfullyDeleted"](): string;
    /**
      * `今天`
      */
    ["com.affine.today"](): string;
    /**
      * `明日`
      */
    ["com.affine.tomorrow"](): string;
    /**
      * `上一个 {{weekday}}`
      */
    ["com.affine.last-week"](options: {
        readonly weekday: string;
    }): string;
    /**
      * `下一个 {{weekday}}`
      */
    ["com.affine.next-week"](options: {
        readonly weekday: string;
    }): string;
    /**
      * `在移动设备上仅限于查看。`
      */
    ["com.affine.top-tip.mobile"](): string;
    /**
      * `删除`
      */
    ["com.affine.trashOperation.delete"](): string;
    /**
      * `一旦删除，您将无法撤销此操作。您确定吗？`
      */
    ["com.affine.trashOperation.delete.description"](): string;
    /**
      * `永久删除`
      */
    ["com.affine.trashOperation.delete.title"](): string;
    /**
      * `一旦删除，您将无法撤销此操作。您确定吗？`
      */
    ["com.affine.trashOperation.deleteDescription"](): string;
    /**
      * `永久删除`
      */
    ["com.affine.trashOperation.deletePermanently"](): string;
    /**
      * `恢复`
      */
    ["com.affine.trashOperation.restoreIt"](): string;
    /**
      * `刷新当前页面`
      */
    ["com.affine.upgrade.button-text.done"](): string;
    /**
      * `数据升级错误`
      */
    ["com.affine.upgrade.button-text.error"](): string;
    /**
      * `升级工作区数据`
      */
    ["com.affine.upgrade.button-text.pending"](): string;
    /**
      * `正在升级`
      */
    ["com.affine.upgrade.button-text.upgrading"](): string;
    /**
      * `升级工作区数据后，请刷新页面以查看更改。`
      */
    ["com.affine.upgrade.tips.done"](): string;
    /**
      * `在升级工作区数据时遇到了一些错误。`
      */
    ["com.affine.upgrade.tips.error"](): string;
    /**
      * `为确保与更新后的 识光 客户端兼容，请点击下方的“升级工作区数据”按钮进行数据升级。`
      */
    ["com.affine.upgrade.tips.normal"](): string;
    /**
      * `AI 用量`
      */
    ["com.affine.user-info.usage.ai"](): string;
    /**
      * `云存储`
      */
    ["com.affine.user-info.usage.cloud"](): string;
    /**
      * `关闭`
      */
    ["com.affine.workbench.split-view-menu.close"](): string;
    /**
      * `全屏`
      */
    ["com.affine.workbench.split-view-menu.full-screen"](): string;
    /**
      * `单独视窗`
      */
    ["com.affine.workbench.split-view-menu.keep-this-one"](): string;
    /**
      * `移至左侧`
      */
    ["com.affine.workbench.split-view-menu.move-left"](): string;
    /**
      * `移至右侧`
      */
    ["com.affine.workbench.split-view-menu.move-right"](): string;
    /**
      * `在分割视图中打开`
      */
    ["com.affine.workbench.split-view.page-menu-open"](): string;
    /**
      * `在新标签页打开`
      */
    ["com.affine.workbench.tab.page-menu-open"](): string;
    /**
      * `您无法删除最后一个工作区`
      */
    ["com.affine.workspace.cannot-delete"](): string;
    /**
      * `云工作区`
      */
    ["com.affine.workspace.cloud"](): string;
    /**
      * `退出登录`
      */
    ["com.affine.workspace.cloud.account.logout"](): string;
    /**
      * `账户设置`
      */
    ["com.affine.workspace.cloud.account.settings"](): string;
    /**
      * `管理面板`
      */
    ["com.affine.workspace.cloud.account.admin"](): string;
    /**
      * `团队所有者`
      */
    ["com.affine.workspace.cloud.account.team.owner"](): string;
    /**
      * `团队成员`
      */
    ["com.affine.workspace.cloud.account.team.member"](): string;
    /**
      * `多个团队`
      */
    ["com.affine.workspace.cloud.account.team.multi"](): string;
    /**
      * `点击打开工作区`
      */
    ["com.affine.workspace.cloud.account.team.tips-1"](): string;
    /**
      * `点击以打开工作区列表`
      */
    ["com.affine.workspace.cloud.account.team.tips-2"](): string;
    /**
      * `登录 / 注册 识光`
      */
    ["com.affine.workspace.cloud.auth"](): string;
    /**
      * `通过 识光 同步`
      */
    ["com.affine.workspace.cloud.description"](): string;
    /**
      * `加入工作区`
      */
    ["com.affine.workspace.cloud.join"](): string;
    /**
      * `识光 同步`
      */
    ["com.affine.workspace.cloud.sync"](): string;
    /**
      * `开启 识光 同步失败，请稍后重试。`
      */
    ["com.affine.workspace.enable-cloud.failed"](): string;
    /**
      * `本地工作区`
      */
    ["com.affine.workspace.local"](): string;
    /**
      * `导入工作区`
      */
    ["com.affine.workspace.local.import"](): string;
    /**
      * `取消`
      */
    ["com.affine.workspaceDelete.button.cancel"](): string;
    /**
      * `删除`
      */
    ["com.affine.workspaceDelete.button.delete"](): string;
    /**
      * `请输入工作区名称以确认`
      */
    ["com.affine.workspaceDelete.placeholder"](): string;
    /**
      * `删除工作区`
      */
    ["com.affine.workspaceDelete.title"](): string;
    /**
      * `创建工作区`
      */
    ["com.affine.workspaceList.addWorkspace.create"](): string;
    /**
      * `创建同步工作区`
      */
    ["com.affine.workspaceList.addWorkspace.create-cloud"](): string;
    /**
      * `识光 同步`
      */
    ["com.affine.workspaceList.workspaceListType.cloud"](): string;
    /**
      * `本地储存`
      */
    ["com.affine.workspaceList.workspaceListType.local"](): string;
    /**
      * `添加服务器`
      */
    ["com.affine.workspaceList.addServer"](): string;
    /**
      * `全部文档`
      */
    ["com.affine.workspaceSubPath.all"](): string;
    /**
      * `Intelligence`
      */
    ["com.affine.workspaceSubPath.chat"](): string;
    /**
      * `回收站`
      */
    ["com.affine.workspaceSubPath.trash"](): string;
    /**
      * `已删除的文档将显示在此处。`
      */
    ["com.affine.workspaceSubPath.trash.empty-description"](): string;
    /**
      * `在空白页面书写`
      */
    ["com.affine.write_with_a_blank_page"](): string;
    /**
      * `昨天`
      */
    ["com.affine.yesterday"](): string;
    /**
      * `不活跃`
      */
    ["com.affine.inactive"](): string;
    /**
      * `不活跃的成员`
      */
    ["com.affine.inactive-member"](): string;
    /**
      * `不活跃的工作区`
      */
    ["com.affine.inactive-workspace"](): string;
    /**
      * `显示属性`
      */
    ["com.affine.all-docs.display.properties"](): string;
    /**
      * `列表视图选项`
      */
    ["com.affine.all-docs.display.list-view"](): string;
    /**
      * `图标`
      */
    ["com.affine.all-docs.display.list-view.icon"](): string;
    /**
      * `正文`
      */
    ["com.affine.all-docs.display.list-view.body"](): string;
    /**
      * `快捷操作`
      */
    ["com.affine.all-docs.quick-actions"](): string;
    /**
      * `收藏`
      */
    ["com.affine.all-docs.quick-action.favorite"](): string;
    /**
      * `移动到回收站`
      */
    ["com.affine.all-docs.quick-action.trash"](): string;
    /**
      * `在拆分视图中打开`
      */
    ["com.affine.all-docs.quick-action.split"](): string;
    /**
      * `在新标签页打开`
      */
    ["com.affine.all-docs.quick-action.tab"](): string;
    /**
      * `选择复选框`
      */
    ["com.affine.all-docs.quick-action.select"](): string;
    /**
      * `永久删除`
      */
    ["com.affine.all-docs.quick-action.delete-permanently"](): string;
    /**
      * `恢复`
      */
    ["com.affine.all-docs.quick-action.restore"](): string;
    /**
      * `全部`
      */
    ["com.affine.all-docs.pinned-collection.all"](): string;
    /**
      * `编辑精选规则`
      */
    ["com.affine.all-docs.pinned-collection.edit"](): string;
    /**
      * `模板`
      */
    ["com.affine.all-docs.group.is-template"](): string;
    /**
      * `不是模板`
      */
    ["com.affine.all-docs.group.is-not-template"](): string;
    /**
      * `是 Journal`
      */
    ["com.affine.all-docs.group.is-journal"](): string;
    /**
      * `非 Journal`
      */
    ["com.affine.all-docs.group.is-not-journal"](): string;
    /**
      * `已勾选`
      */
    ["com.affine.all-docs.group.is-checked"](): string;
    /**
      * `未勾选`
      */
    ["com.affine.all-docs.group.is-not-checked"](): string;
    /**
      * `从未更新`
      */
    ["com.affine.all-docs.group.updated-at.never-updated"](): string;
    /**
      * `核心`
      */
    core(): string;
    /**
      * `深色`
      */
    dark(): string;
    /**
      * `邀请您加入`
      */
    ["invited you to join"](): string;
    /**
      * `浅色`
      */
    light(): string;
    /**
      * `其他`
      */
    others(): string;
    /**
      * `跟随系统`
      */
    system(): string;
    /**
      * `未命名`
      */
    unnamed(): string;
    /**
      * `请升级至最新版Chrome浏览器以获得最佳体验。`
      */
    upgradeBrowser(): string;
    /**
      * `工作区属性`
      */
    ["com.affine.workspace.properties"](): string;
    /**
      * `重命名为 “{{name}}”`
      */
    ["com.affine.m.rename-to"](options: {
        readonly name: string;
    }): string;
    /**
      * `重命名`
      */
    ["com.affine.m.explorer.folder.rename"](): string;
    /**
      * `创建文件夹`
      */
    ["com.affine.m.explorer.folder.new-dialog-title"](): string;
    /**
      * `组织`
      */
    ["com.affine.m.explorer.folder.root"](): string;
    /**
      * `在 {{parent}} 中创建文件夹`
      */
    ["com.affine.m.explorer.folder.new-tip-empty"](options: {
        readonly parent: string;
    }): string;
    /**
      * `在 {{parent}} 中创建 {{value}}`
      */
    ["com.affine.m.explorer.folder.new-tip-not-empty"](options: Readonly<{
        parent: string;
        value: string;
    }>): string;
    /**
      * `已完成`
      */
    ["com.affine.m.explorer.folder.rename-confirm"](): string;
    /**
      * `重命名`
      */
    ["com.affine.m.explorer.tag.rename"](): string;
    /**
      * `修改标签`
      */
    ["com.affine.m.explorer.tag.rename-menu-title"](): string;
    /**
      * `新建标签`
      */
    ["com.affine.m.explorer.tag.new-dialog-title"](): string;
    /**
      * `修改成功`
      */
    ["com.affine.m.explorer.tag.rename-confirm"](): string;
    /**
      * `为此工作区新建一个标签。`
      */
    ["com.affine.m.explorer.tag.new-tip-empty"](): string;
    /**
      * `为此工作区新建 “{{value}}” 标签。`
      */
    ["com.affine.m.explorer.tag.new-tip-not-empty"](options: {
        readonly value: string;
    }): string;
    /**
      * `管理文档`
      */
    ["com.affine.m.explorer.tag.manage-docs"](): string;
    /**
      * `重命名`
      */
    ["com.affine.m.explorer.collection.rename"](): string;
    /**
      * `重命名精选`
      */
    ["com.affine.m.explorer.collection.rename-menu-title"](): string;
    /**
      * `新建精选`
      */
    ["com.affine.m.explorer.collection.new-dialog-title"](): string;
    /**
      * `还没有文档`
      */
    ["com.affine.m.explorer.empty.docs.title"](): string;
    /**
      * `创建第一篇文档，开始记录灵感、整理知识。`
      */
    ["com.affine.m.explorer.empty.docs.description"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.m.explorer.empty.docs.action"](): string;
    /**
      * `还没有合集`
      */
    ["com.affine.m.explorer.empty.collections.title"](): string;
    /**
      * `创建合集，把相关内容归拢在一处。`
      */
    ["com.affine.m.explorer.empty.collections.description"](): string;
    /**
      * `新建合集`
      */
    ["com.affine.m.explorer.empty.collections.action"](): string;
    /**
      * `还没有标签`
      */
    ["com.affine.m.explorer.empty.tags.title"](): string;
    /**
      * `为文档添加标签，方便整理与查找。`
      */
    ["com.affine.m.explorer.empty.tags.description"](): string;
    /**
      * `新建标签`
      */
    ["com.affine.m.explorer.empty.tags.action"](): string;
    /**
      * `重命名`
      */
    ["com.affine.m.explorer.doc.rename"](): string;
    /**
      * `文档`
      */
    ["com.affine.m.selector.type-doc"](): string;
    /**
      * `标签`
      */
    ["com.affine.m.selector.type-tag"](): string;
    /**
      * `精选`
      */
    ["com.affine.m.selector.type-collection"](): string;
    /**
      * `文件夹`
      */
    ["com.affine.m.selector.where-folder"](): string;
    /**
      * `标签`
      */
    ["com.affine.m.selector.where-tag"](): string;
    /**
      * `精选`
      */
    ["com.affine.m.selector.where-collection"](): string;
    /**
      * `应用`
      */
    ["com.affine.m.selector.confirm-default"](): string;
    /**
      * `管理 {{type}}`
      */
    ["com.affine.m.selector.title"](options: {
        readonly type: string;
    }): string;
    /**
      * `{{total}} 件项目`
      */
    ["com.affine.m.selector.info-total"](options: {
        readonly total: string;
    }): string;
    /**
      * `添加 {{count}} 个 {{type}}`
      */
    ["com.affine.m.selector.info-added"](options: Readonly<{
        count: string;
        type: string;
    }>): string;
    /**
      * `删除 {{count}} 个 {{type}}`
      */
    ["com.affine.m.selector.info-removed"](options: Readonly<{
        count: string;
        type: string;
    }>): string;
    /**
      * `删除项目`
      */
    ["com.affine.m.selector.remove-warning.title"](): string;
    /**
      * `您取消选中了当前 {{where}} 中已存在的 {{type}}，这意味着您将从此 {{where}} 中移除它们。该项目不会被删除。`
      */
    ["com.affine.m.selector.remove-warning.message"](options: Readonly<{
        where: string;
        type: string;
    }>): string;
    /**
      * `不再询问`
      */
    ["com.affine.m.selector.remove-warning.confirm"](): string;
    /**
      * `取消`
      */
    ["com.affine.m.selector.remove-warning.cancel"](): string;
    /**
      * `标签`
      */
    ["com.affine.m.selector.remove-warning.where-tag"](): string;
    /**
      * `文件夹`
      */
    ["com.affine.m.selector.remove-warning.where-folder"](): string;
    /**
      * `今日活动`
      */
    ["com.affine.m.selector.journal-menu.today-activity"](): string;
    /**
      * `今日 Journal 中有重复条目`
      */
    ["com.affine.m.selector.journal-menu.conflicts"](): string;
    /**
      * `无法预览此文件`
      */
    ["com.affine.attachment.preview.error.title"](): string;
    /**
      * `文件类型不支持。`
      */
    ["com.affine.attachment.preview.error.subtitle"](): string;
    /**
      * `无法渲染页面。`
      */
    ["com.affine.pdf.page.render.error"](): string;
    /**
      * `今日 Journal 中有重复条目`
      */
    ["com.affine.editor.journal-conflict.title"](): string;
    /**
      * `搜索 "{{query}}"`
      */
    ["com.affine.editor.at-menu.link-to-doc"](options: {
        readonly query: string;
    }): string;
    /**
      * `最近`
      */
    ["com.affine.editor.at-menu.recent-docs"](): string;
    /**
      * `标签`
      */
    ["com.affine.editor.at-menu.tags"](): string;
    /**
      * `精选`
      */
    ["com.affine.editor.at-menu.collections"](): string;
    /**
      * `加载中...`
      */
    ["com.affine.editor.at-menu.loading"](): string;
    /**
      * `新建`
      */
    ["com.affine.editor.at-menu.new-doc"](): string;
    /**
      * `新建 “{{name}}” 页面`
      */
    ["com.affine.editor.at-menu.create-page"](options: {
        readonly name: string;
    }): string;
    /**
      * `新建 “{{name}}” 无界`
      */
    ["com.affine.editor.at-menu.create-edgeless"](options: {
        readonly name: string;
    }): string;
    /**
      * `导入`
      */
    ["com.affine.editor.at-menu.import"](): string;
    /**
      * `还有 {{count}} 篇文档`
      */
    ["com.affine.editor.at-menu.more-docs-hint"](options: {
        readonly count: string;
    }): string;
    /**
      * `还有 {{count}} 位成员`
      */
    ["com.affine.editor.at-menu.more-members-hint"](options: {
        readonly count: string;
    }): string;
    /**
      * `Journal`
      */
    ["com.affine.editor.at-menu.journal"](): string;
    /**
      * `选择具体日期`
      */
    ["com.affine.editor.at-menu.date-picker"](): string;
    /**
      * `提及成员`
      */
    ["com.affine.editor.at-menu.mention-members"](): string;
    /**
      * `成员未收到通知`
      */
    ["com.affine.editor.at-menu.member-not-notified"](): string;
    /**
      * `该成员没有访问此文档的权限，他们不会收到通知。`
      */
    ["com.affine.editor.at-menu.member-not-notified-message"](): string;
    /**
      * `已邀请并发出通知`
      */
    ["com.affine.editor.at-menu.invited-and-notified"](): string;
    /**
      * `需要访问权限`
      */
    ["com.affine.editor.at-menu.access-needed"](): string;
    /**
      * `{{username}} 无权访问该文档，您是否要邀请并通知他们？`
      */
    ["com.affine.editor.at-menu.access-needed-message"](options: {
        readonly username: string;
    }): string;
    /**
      * `展示`
      */
    ["com.affine.editor.bi-directional-link-panel.show"](): string;
    /**
      * `隐藏`
      */
    ["com.affine.editor.bi-directional-link-panel.hide"](): string;
    /**
      * `折叠页面块`
      */
    ["com.affine.editor.edgeless-note-header.fold-page-block"](): string;
    /**
      * `在页面中打开`
      */
    ["com.affine.editor.edgeless-note-header.open-in-page"](): string;
    /**
      * `折叠`
      */
    ["com.affine.editor.edgeless-embed-synced-doc-header.fold"](): string;
    /**
      * `展开`
      */
    ["com.affine.editor.edgeless-embed-synced-doc-header.unfold"](): string;
    /**
      * `打开`
      */
    ["com.affine.editor.edgeless-embed-synced-doc-header.open"](): string;
    /**
      * `通过无缝协作来为您的团队赋能`
      */
    ["com.affine.upgrade-to-team-page.title"](): string;
    /**
      * `选择现有工作区或创建新工作区`
      */
    ["com.affine.upgrade-to-team-page.workspace-selector.placeholder"](): string;
    /**
      * `创建工作区`
      */
    ["com.affine.upgrade-to-team-page.workspace-selector.create-workspace"](): string;
    /**
      * `升级为团队空间`
      */
    ["com.affine.upgrade-to-team-page.upgrade-button"](): string;
    /**
      * `团队空间为您提供无缝协作所需的一切：`
      */
    ["com.affine.upgrade-to-team-page.benefit.title"](): string;
    /**
      * `邀请无限数量的成员加入您的工作区`
      */
    ["com.affine.upgrade-to-team-page.benefit.g1"](): string;
    /**
      * `设置自定义角色和权限以实现更好的控制`
      */
    ["com.affine.upgrade-to-team-page.benefit.g2"](): string;
    /**
      * `访问高级团队管理功能`
      */
    ["com.affine.upgrade-to-team-page.benefit.g3"](): string;
    /**
      * `优先客户支持`
      */
    ["com.affine.upgrade-to-team-page.benefit.g4"](): string;
    /**
      * `非常适合需要专业协作工具的成长型团队和组织。`
      */
    ["com.affine.upgrade-to-team-page.benefit.description"](): string;
    /**
      * `升级为团队空间`
      */
    ["com.affine.upgrade-to-team-page.upgrade-confirm.title"](): string;
    /**
      * `给您的工作区命名`
      */
    ["com.affine.upgrade-to-team-page.create-and-upgrade-confirm.title"](): string;
    /**
      * `工作区是为个人和团队进行引用、创建和规划的虚拟空间。`
      */
    ["com.affine.upgrade-to-team-page.create-and-upgrade-confirm.description"](): string;
    /**
      * `设置工作区名称`
      */
    ["com.affine.upgrade-to-team-page.create-and-upgrade-confirm.placeholder"](): string;
    /**
      * `继续`
      */
    ["com.affine.upgrade-to-team-page.create-and-upgrade-confirm.confirm"](): string;
    /**
      * `无可用的工作区`
      */
    ["com.affine.upgrade-to-team-page.no-workspace-available"](): string;
    /**
      * `工作区存储`
      */
    ["com.affine.workspace.storage"](): string;
    /**
      * `Journal`
      */
    ["com.affine.cmdk.affine.category.affine.journal"](): string;
    /**
      * `选择具体日期`
      */
    ["com.affine.cmdk.affine.category.affine.date-picker"](): string;
    /**
      * `工作区已暂停同步`
      */
    ["com.affine.payment.sync-paused.title"](): string;
    /**
      * `您的工作区已超出存储和成员限制，同步已暂停。要恢复同步，您可以：`
      */
    ["com.affine.payment.sync-paused.owner.both.description"](): string;
    /**
      * `减少存储使用量并删除一些团队成员`
      */
    ["com.affine.payment.sync-paused.owner.both.tips-1"](): string;
    /**
      * `升级您的计划以增加容量`
      */
    ["com.affine.payment.sync-paused.owner.both.tips-2"](): string;
    /**
      * `您的工作区已超出其存储限制，同步已暂停。要恢复同步，您可以：`
      */
    ["com.affine.payment.sync-paused.owner.storage.description"](): string;
    /**
      * `删除不必要的文件或内容以减少存储空间使用量`
      */
    ["com.affine.payment.sync-paused.owner.storage.tips-1"](): string;
    /**
      * `升级您的计划以增加存储容量`
      */
    ["com.affine.payment.sync-paused.owner.storage.tips-2"](): string;
    /**
      * `您的工作区已达到其最大成员容量，同步已暂停。要恢复同步，您可以：`
      */
    ["com.affine.payment.sync-paused.owner.member.description"](): string;
    /**
      * `从工作区中移除一些团队成员`
      */
    ["com.affine.payment.sync-paused.owner.member.tips-1"](): string;
    /**
      * `升级您的计划以容纳更多团队成员`
      */
    ["com.affine.payment.sync-paused.owner.member.tips-2"](): string;
    /**
      * `此工作区已超出存储和成员限制，同步已暂停。请联系您的工作区所有者解决这些限制并恢复同步。`
      */
    ["com.affine.payment.sync-paused.member.both.description"](): string;
    /**
      * `此工作区已超出其存储限制，同步已暂停。请联系您的工作区所有者以减少存储使用量或升级计划以恢复同步。`
      */
    ["com.affine.payment.sync-paused.member.storage.description"](): string;
    /**
      * `此工作区已达到其最大成员容量，同步已暂停。请联系您的工作区所有者以调整团队成员资格或升级计划以恢复同步。`
      */
    ["com.affine.payment.sync-paused.member.member.description"](): string;
    /**
      * `知道了`
      */
    ["com.affine.payment.sync-paused.member.member.confirm"](): string;
    /**
      * `删除服务器`
      */
    ["com.affine.server.delete"](): string;
    /**
      * `开始`
      */
    ["com.affine.page-starter-bar.start"](): string;
    /**
      * `模板`
      */
    ["com.affine.page-starter-bar.template"](): string;
    /**
      * `以 AI`
      */
    ["com.affine.page-starter-bar.ai"](): string;
    /**
      * `无界`
      */
    ["com.affine.page-starter-bar.edgeless"](): string;
    /**
      * `不支持的消息`
      */
    ["com.affine.notification.unsupported"](): string;
    /**
      * `你有什么想法？`
      */
    ["com.affine.notification.comment-prompt"](): string;
    /**
      * `没有新通知`
      */
    ["com.affine.notification.empty"](): string;
    /**
      * `加载更多……`
      */
    ["com.affine.notification.loading-more"](): string;
    /**
      * `您将在这里收到 @提及 和工作区邀请的通知。`
      */
    ["com.affine.notification.empty.description"](): string;
    /**
      * `打开工作区`
      */
    ["com.affine.notification.invitation-review-approved.open-workspace"](): string;
    /**
      * `接受并加入`
      */
    ["com.affine.notification.invitation.accept"](): string;
    /**
      * `删除所有通知`
      */
    ["com.affine.notification.delete-all"](): string;
    /**
      * `提示`
      */
    tips(): string;
    /**
      * `模板`
      */
    Template(): string;
    /**
      * `删除模板`
      */
    ["com.affine.template-list.delete"](): string;
    /**
      * `无模板`
      */
    ["com.affine.template-list.empty"](): string;
    /**
      * `创建新模板`
      */
    ["com.affine.template-list.create-new"](): string;
    /**
      * `为 Journal 设置模板`
      */
    ["com.affine.template-journal-onboarding.title"](): string;
    /**
      * `选择`
      */
    ["com.affine.template-journal-onboarding.select"](): string;
    /**
      * `我的模板`
      */
    ["com.affine.settings.workspace.template.title"](): string;
    /**
      * `Journal 模板`
      */
    ["com.affine.settings.workspace.template.journal"](): string;
    /**
      * `为你的 Journal 选择一个模板`
      */
    ["com.affine.settings.workspace.template.journal-desc"](): string;
    /**
      * `保持为空`
      */
    ["com.affine.settings.workspace.template.keep-empty"](): string;
    /**
      * `使用模板创建新文档`
      */
    ["com.affine.settings.workspace.template.page"](): string;
    /**
      * `新文档将使用指定模板，忽略默认设置。`
      */
    ["com.affine.settings.workspace.template.page-desc"](): string;
    /**
      * `新文档模板`
      */
    ["com.affine.settings.workspace.template.page-select"](): string;
    /**
      * `移除模板`
      */
    ["com.affine.settings.workspace.template.remove"](): string;
    /**
      * `您没有执行此操作的权限`
      */
    ["com.affine.no-permission"](): string;
    /**
      * `未使用的 blob`
      */
    ["com.affine.settings.workspace.storage.unused-blobs"](): string;
    /**
      * `没有未使用的 blobs`
      */
    ["com.affine.settings.workspace.storage.unused-blobs.empty"](): string;
    /**
      * `已选中`
      */
    ["com.affine.settings.workspace.storage.unused-blobs.selected"](): string;
    /**
      * `删除 blob 文件`
      */
    ["com.affine.settings.workspace.storage.unused-blobs.delete.title"](): string;
    /**
      * `您确定要删除这些 blob 文件吗？此操作无法撤销。在继续之前，请确保您不再需要它们。`
      */
    ["com.affine.settings.workspace.storage.unused-blobs.delete.warning"](): string;
    /**
      * `加入失败`
      */
    ["com.affine.fail-to-join-workspace.title"](): string;
    /**
      * `该邀请属于另一个账户`
      */
    ["com.affine.invitation.account-mismatch.title"](): string;
    /**
      * `你当前登录的账户不在邀请名单中。请使用收到邀请的账户登录后继续。`
      */
    ["com.affine.invitation.account-mismatch.description"](): string;
    /**
      * `换个账户登录`
      */
    ["com.affine.invitation.account-mismatch.switch-account"](): string;
    /**
      * `返回识光`
      */
    ["com.affine.invitation.account-mismatch.back-to-affine"](): string;
    /**
      * `请联系您的工作区所有者以添加更多席位。`
      */
    ["com.affine.fail-to-join-workspace.description-2"](): string;
    /**
      * `请求加入`
      */
    ["com.affine.request-to-join-workspace.button"](): string;
    /**
      * `请求发送成功`
      */
    ["com.affine.sent-request-to-join-workspace.title"](): string;
    /**
      * `请求发送失败`
      */
    ["com.affine.failed-to-send-request.title"](): string;
    /**
      * `Readwise`
      */
    ["com.affine.integration.name.readwise"](): string;
    /**
      * `集成`
      */
    ["com.affine.integration.integrations"](): string;
    /**
      * `网页裁剪`
      */
    ["com.affine.integration.web-clipper.name"](): string;
    /**
      * `将网页导入 识光`
      */
    ["com.affine.integration.web-clipper.desc"](): string;
    /**
      * `通过多样化的附加组件和无缝集成提升您的 识光 体验。`
      */
    ["com.affine.integration.setting.description"](): string;
    /**
      * `了解如何为 识光 开发集成`
      */
    ["com.affine.integration.setting.learn"](): string;
    /**
      * `Readwise`
      */
    ["com.affine.integration.readwise.name"](): string;
    /**
      * `手动从 Readwise 导入您的内容到 识光`
      */
    ["com.affine.integration.readwise.desc"](): string;
    /**
      * `连接`
      */
    ["com.affine.integration.readwise.connect"](): string;
    /**
      * `连接到 Readwise`
      */
    ["com.affine.integration.readwise.connect.title"](): string;
    /**
      * `在此处粘贴您的访问令牌`
      */
    ["com.affine.integration.readwise.connect.placeholder"](): string;
    /**
      * `请输入有效的访问令牌。`
      */
    ["com.affine.integration.readwise.connect.input-error"](): string;
    /**
      * `访问令牌验证失败`
      */
    ["com.affine.integration.readwise.connect.error-notify-title"](): string;
    /**
      * `令牌无法访问 Readwise。 请验证访问权限并重试。`
      */
    ["com.affine.integration.readwise.connect.error-notify-desc"](): string;
    /**
      * `导入`
      */
    ["com.affine.integration.readwise.import"](): string;
    /**
      * `断开连接`
      */
    ["com.affine.integration.readwise.disconnect"](): string;
    /**
      * `断开 Readwise？`
      */
    ["com.affine.integration.readwise.disconnect.title"](): string;
    /**
      * `断开连接后，内容将不再导入。您想保留现有的高亮内容在 识光 中吗？`
      */
    ["com.affine.integration.readwise.disconnect.desc"](): string;
    /**
      * `保持`
      */
    ["com.affine.integration.readwise.disconnect.keep"](): string;
    /**
      * `删除`
      */
    ["com.affine.integration.readwise.disconnect.delete"](): string;
    /**
      * `本次将导入的高亮内容`
      */
    ["com.affine.integration.readwise.import.title"](): string;
    /**
      * `从头开始导入所有内容`
      */
    ["com.affine.integration.readwise.import.desc-from-start"](): string;
    /**
      * `内容`
      */
    ["com.affine.integration.readwise.import.cell-h-content"](): string;
    /**
      * `待办事项`
      */
    ["com.affine.integration.readwise.import.cell-h-todo"](): string;
    /**
      * `最后更新于 Readwise`
      */
    ["com.affine.integration.readwise.import.cell-h-time"](): string;
    /**
      * `新建`
      */
    ["com.affine.integration.readwise.import.todo-new"](): string;
    /**
      * `跳过`
      */
    ["com.affine.integration.readwise.import.todo-skip"](): string;
    /**
      * `已更新`
      */
    ["com.affine.integration.readwise.import.todo-update"](): string;
    /**
      * `没有需要导入的高亮内容`
      */
    ["com.affine.integration.readwise.import.empty"](): string;
    /**
      * `导入中……`
      */
    ["com.affine.integration.readwise.import.importing"](): string;
    /**
      * `请保持此应用程序处于活动状态，直到完成`
      */
    ["com.affine.integration.readwise.import.importing-desc"](): string;
    /**
      * `停止导入`
      */
    ["com.affine.integration.readwise.import.importing-stop"](): string;
    /**
      * `导入已中止`
      */
    ["com.affine.integration.readwise.import.abort-notify-title"](): string;
    /**
      * `导入中止，已处理 {{finished}} 个高亮内容`
      */
    ["com.affine.integration.readwise.import.abort-notify-desc"](options: {
        readonly finished: string;
    }): string;
    /**
      * `配置`
      */
    ["com.affine.integration.readwise.setting.caption"](): string;
    /**
      * `新的 Readwise 高亮内容将导入 识光 `
      */
    ["com.affine.integration.readwise.setting.sync-new-name"](): string;
    /**
      * `在 Readwise 中的新高亮内容将同步到 识光 `
      */
    ["com.affine.integration.readwise.setting.sync-new-desc"](): string;
    /**
      * `将导入 Readwise 高亮内容的更新`
      */
    ["com.affine.integration.readwise.setting.update-name"](): string;
    /**
      * `启用此选项，以便我们处理来自 Readwise 的现有高亮内容的更新 `
      */
    ["com.affine.integration.readwise.setting.update-desc"](): string;
    /**
      * `我们如何处理更新`
      */
    ["com.affine.integration.readwise.setting.update-strategy"](): string;
    /**
      * `将新版本附加到末尾`
      */
    ["com.affine.integration.readwise.setting.update-append-name"](): string;
    /**
      * `引用或修改的高亮内容将在末尾添加未来的版本`
      */
    ["com.affine.integration.readwise.setting.update-append-desc"](): string;
    /**
      * `用新版本覆盖`
      */
    ["com.affine.integration.readwise.setting.update-override-name"](): string;
    /**
      * `未来更新时，已引用或修改的高亮内容将被覆盖`
      */
    ["com.affine.integration.readwise.setting.update-override-desc"](): string;
    /**
      * `开始导入`
      */
    ["com.affine.integration.readwise.setting.start-import-name"](): string;
    /**
      * `使用上述设置`
      */
    ["com.affine.integration.readwise.setting.start-import-desc"](): string;
    /**
      * `导入`
      */
    ["com.affine.integration.readwise.setting.start-import-button"](): string;
    /**
      * `应用标签以突出显示导入内容`
      */
    ["com.affine.integration.readwise.setting.tags-label"](): string;
    /**
      * `点击添加标签`
      */
    ["com.affine.integration.readwise.setting.tags-placeholder"](): string;
    /**
      * `作者`
      */
    ["com.affine.integration.readwise-prop.author"](): string;
    /**
      * `来源`
      */
    ["com.affine.integration.readwise-prop.source"](): string;
    /**
      * `创建时间`
      */
    ["com.affine.integration.readwise-prop.created"](): string;
    /**
      * `更新时间`
      */
    ["com.affine.integration.readwise-prop.updated"](): string;
    /**
      * `集成属性`
      */
    ["com.affine.integration.properties"](): string;
    /**
      * `日历`
      */
    ["com.affine.integration.calendar.name"](): string;
    /**
      * `事件将显示在 识光 的 Journal 中`
      */
    ["com.affine.integration.calendar.desc"](): string;
    /**
      * `订阅`
      */
    ["com.affine.integration.calendar.new-subscription"](): string;
    /**
      * `取消订阅`
      */
    ["com.affine.integration.calendar.unsubscribe"](): string;
    /**
      * `添加日历订阅的链接`
      */
    ["com.affine.integration.calendar.new-title"](): string;
    /**
      * `日历订阅链接`
      */
    ["com.affine.integration.calendar.new-url-label"](): string;
    /**
      * `保存日历设置时出错`
      */
    ["com.affine.integration.calendar.save-error"](): string;
    /**
      * `全天`
      */
    ["com.affine.integration.calendar.all-day"](): string;
    /**
      * `加载日历账户失败`
      */
    ["com.affine.integration.calendar.account.load-error"](): string;
    /**
      * `加载日历提供商失败`
      */
    ["com.affine.integration.calendar.provider.load-error"](): string;
    /**
      * `启动日历授权失败`
      */
    ["com.affine.integration.calendar.auth.start-error"](): string;
    /**
      * `取消关联日历账户失败`
      */
    ["com.affine.integration.calendar.account.unlink-error"](): string;
    /**
      * `取消关联`
      */
    ["com.affine.integration.calendar.account.unlink"](): string;
    /**
      * `关联`
      */
    ["com.affine.integration.calendar.account.link"](): string;
    /**
      * `尚未关联日历账户。`
      */
    ["com.affine.integration.calendar.account.linked-empty"](): string;
    /**
      * `授权失败：{{error}}`
      */
    ["com.affine.integration.calendar.account.status.failed"](options: {
        readonly error: string;
    }): string;
    /**
      * `授权失败。请重新关联你的账户。`
      */
    ["com.affine.integration.calendar.account.status.failed-reconnect"](): string;
    /**
      * `{{count}} 个日历`
      */
    ["com.affine.integration.calendar.account.count"](options: {
        readonly count: string;
    }): string;
    /**
      * `关联 CalDAV 账户`
      */
    ["com.affine.integration.calendar.caldav.link.title"](): string;
    /**
      * `关联 CalDAV 账户失败`
      */
    ["com.affine.integration.calendar.caldav.link.failed"](): string;
    /**
      * `提供商`
      */
    ["com.affine.integration.calendar.caldav.field.provider"](): string;
    /**
      * `选择提供商`
      */
    ["com.affine.integration.calendar.caldav.field.provider.placeholder"](): string;
    /**
      * `请选择提供商。`
      */
    ["com.affine.integration.calendar.caldav.field.provider.error"](): string;
    /**
      * `用户名`
      */
    ["com.affine.integration.calendar.caldav.field.username"](): string;
    /**
      * `email@example.com`
      */
    ["com.affine.integration.calendar.caldav.field.username.placeholder"](): string;
    /**
      * `用户名为必填项。`
      */
    ["com.affine.integration.calendar.caldav.field.username.error"](): string;
    /**
      * `密码`
      */
    ["com.affine.integration.calendar.caldav.field.password"](): string;
    /**
      * `密码或应用专用密码`
      */
    ["com.affine.integration.calendar.caldav.field.password.placeholder"](): string;
    /**
      * `密码为必填项。`
      */
    ["com.affine.integration.calendar.caldav.field.password.error"](): string;
    /**
      * `显示名称（可选）`
      */
    ["com.affine.integration.calendar.caldav.field.displayName"](): string;
    /**
      * `我的 CalDAV`
      */
    ["com.affine.integration.calendar.caldav.field.displayName.placeholder"](): string;
    /**
      * `需要应用专用密码。`
      */
    ["com.affine.integration.calendar.caldav.hint.app-password"](): string;
    /**
      * `了解更多`
      */
    ["com.affine.integration.calendar.caldav.hint.learn-more"](): string;
    /**
      * `提供商设置指南`
      */
    ["com.affine.integration.calendar.caldav.hint.guide"](): string;
    /**
      * `新建文档`
      */
    ["com.affine.integration.calendar.new-doc"](): string;
    /**
      * `显示日历事件`
      */
    ["com.affine.integration.calendar.show-events"](): string;
    /**
      * `启用此设置后，您可以将日历事件关联到 识光 的 Journal 中`
      */
    ["com.affine.integration.calendar.show-events-desc"](): string;
    /**
      * `显示全天事件`
      */
    ["com.affine.integration.calendar.show-all-day-events"](): string;
    /**
      * `您确定要取消订阅“{{name}}”吗？取消订阅此帐户将从 Journal 中删除其数据。`
      */
    ["com.affine.integration.calendar.unsubscribe-content"](options: {
        readonly name: string;
    }): string;
    /**
      * `未找到 {{date}} 的日记页面。请先创建日记页面。`
      */
    ["com.affine.integration.calendar.no-journal"](options: {
        readonly date: string;
    }): string;
    /**
      * `尚未订阅日历。`
      */
    ["com.affine.integration.calendar.no-calendar"](): string;
    /**
      * `MCP服务器`
      */
    ["com.affine.integration.mcp-server.name"](): string;
    /**
      * `允许其他 MCP 客户端搜索和 识光 的文档。`
      */
    ["com.affine.integration.mcp-server.desc"](): string;
    /**
      * `MCP token 仅显示一次。请删除并重新创建，以复制 JSON 配置。`
      */
    ["com.affine.integration.mcp-server.copy-json.disabled-hint"](): string;
    /**
      * `凭证`
      */
    ["com.affine.integration.mcp-server.credentials.title"](): string;
    /**
      * `为每个 MCP 客户端使用独立凭证，以便单独吊销。`
      */
    ["com.affine.integration.mcp-server.credentials.description"](): string;
    /**
      * `创建凭证`
      */
    ["com.affine.integration.mcp-server.action.create"](): string;
    /**
      * `轮换`
      */
    ["com.affine.integration.mcp-server.action.rotate"](): string;
    /**
      * `吊销凭证`
      */
    ["com.affine.integration.mcp-server.action.revoke"](): string;
    /**
      * `复制 token`
      */
    ["com.affine.integration.mcp-server.action.copy-token"](): string;
    /**
      * `复制 JSON`
      */
    ["com.affine.integration.mcp-server.action.copy-json"](): string;
    /**
      * `完成`
      */
    ["com.affine.integration.mcp-server.action.done"](): string;
    /**
      * `加载 MCP 凭证失败。`
      */
    ["com.affine.integration.mcp-server.load-error"](): string;
    /**
      * `暂无 MCP 凭证`
      */
    ["com.affine.integration.mcp-server.empty.title"](): string;
    /**
      * `创建绑定当前工作区的凭证以连接 MCP 客户端。`
      */
    ["com.affine.integration.mcp-server.empty.description"](): string;
    /**
      * `只读`
      */
    ["com.affine.integration.mcp-server.access.read-only"](): string;
    /**
      * `可按你的当前权限读取和搜索此工作区的文档。`
      */
    ["com.affine.integration.mcp-server.access.read-only-desc"](): string;
    /**
      * `读写`
      */
    ["com.affine.integration.mcp-server.access.read-write"](): string;
    /**
      * `{{date}} 到期`
      */
    ["com.affine.integration.mcp-server.meta.expires"](options: {
        readonly date: string;
    }): string;
    /**
      * `创建于 {{date}}`
      */
    ["com.affine.integration.mcp-server.meta.created"](options: {
        readonly date: string;
    }): string;
    /**
      * `最近使用于 {{date}}`
      */
    ["com.affine.integration.mcp-server.meta.last-used"](options: {
        readonly date: string;
    }): string;
    /**
      * `从未使用`
      */
    ["com.affine.integration.mcp-server.meta.never-used"](): string;
    /**
      * `旧 token 有效至 {{date}}`
      */
    ["com.affine.integration.mcp-server.meta.grace-until"](options: {
        readonly date: string;
    }): string;
    /**
      * `有效`
      */
    ["com.affine.integration.mcp-server.status.active"](): string;
    /**
      * `轮换中`
      */
    ["com.affine.integration.mcp-server.status.rotating"](): string;
    /**
      * `即将到期`
      */
    ["com.affine.integration.mcp-server.status.expiring"](): string;
    /**
      * `已到期`
      */
    ["com.affine.integration.mcp-server.status.expired"](): string;
    /**
      * `已吊销`
      */
    ["com.affine.integration.mcp-server.status.revoked"](): string;
    /**
      * `创建 MCP 凭证`
      */
    ["com.affine.integration.mcp-server.create.title"](): string;
    /**
      * `此凭证只能用于当前工作区的 MCP endpoint。`
      */
    ["com.affine.integration.mcp-server.create.description"](): string;
    /**
      * `名称`
      */
    ["com.affine.integration.mcp-server.field.label"](): string;
    /**
      * `权限`
      */
    ["com.affine.integration.mcp-server.field.access"](): string;
    /**
      * `有效期`
      */
    ["com.affine.integration.mcp-server.field.expiry"](): string;
    /**
      * `{{days}} 天`
      */
    ["com.affine.integration.mcp-server.expiry.days"](options: {
        readonly days: string;
    }): string;
    /**
      * `MCP 凭证已创建`
      */
    ["com.affine.integration.mcp-server.reveal.title"](): string;
    /**
      * `请立即复制此凭证，关闭后将无法再次查看。`
      */
    ["com.affine.integration.mcp-server.reveal.warning"](): string;
    /**
      * `旧 token 在 {{date}} 前仍然有效。`
      */
    ["com.affine.integration.mcp-server.reveal.old-valid-until"](options: {
        readonly date: string;
    }): string;
    /**
      * `凭证`
      */
    ["com.affine.integration.mcp-server.reveal.token"](): string;
    /**
      * `MCP 配置`
      */
    ["com.affine.integration.mcp-server.reveal.config"](): string;
    /**
      * `轮换此凭证？`
      */
    ["com.affine.integration.mcp-server.rotate.title"](): string;
    /**
      * `系统将立即创建新 token；旧 token 最多保留 24 小时，以便更新 MCP 客户端。`
      */
    ["com.affine.integration.mcp-server.rotate.description"](): string;
    /**
      * `吊销“{{name}}”？`
      */
    ["com.affine.integration.mcp-server.revoke.title"](options: {
        readonly name: string;
    }): string;
    /**
      * `此凭证的所有世代会立即失效，且无法恢复。`
      */
    ["com.affine.integration.mcp-server.revoke.description"](): string;
    /**
      * `支持的能力`
      */
    ["com.affine.integration.mcp-server.capabilities.title"](): string;
    /**
      * `读取文档`
      */
    ["com.affine.integration.mcp-server.capabilities.read"](): string;
    /**
      * `关键词搜索`
      */
    ["com.affine.integration.mcp-server.capabilities.keyword-search"](): string;
    /**
      * `语义搜索`
      */
    ["com.affine.integration.mcp-server.capabilities.semantic-search"](): string;
    /**
      * `创建和更新文档`
      */
    ["com.affine.integration.mcp-server.capabilities.write"](): string;
    /**
      * `笔记`
      */
    ["com.affine.audio.notes"](): string;
    /**
      * `转录`
      */
    ["com.affine.audio.transcribing"](): string;
    /**
      * `转录失败`
      */
    ["com.affine.audio.transcription-failed"](): string;
    /**
      * `无法检索他人的 AI 结果`
      */
    ["com.affine.audio.transcribe.non-owner.confirm.title"](): string;
    /**
      * `音频活动中`
      */
    ["com.affine.recording.new"](): string;
    /**
      * `正在导入...`
      */
    ["com.affine.recording.importing.prompt"](): string;
    /**
      * `已完成`
      */
    ["com.affine.recording.success.prompt"](): string;
    /**
      * `打开应用`
      */
    ["com.affine.recording.success.button"](): string;
    /**
      * `保存失败`
      */
    ["com.affine.recording.failed.prompt"](): string;
    /**
      * `打开文件`
      */
    ["com.affine.recording.failed.button"](): string;
    /**
      * `{{appName}} 的音频`
      */
    ["com.affine.recording.recording"](options: {
        readonly appName: string;
    }): string;
    /**
      * `音频录制`
      */
    ["com.affine.recording.recording.unnamed"](): string;
    /**
      * `开始`
      */
    ["com.affine.recording.start"](): string;
    /**
      * `忽略`
      */
    ["com.affine.recording.dismiss"](): string;
    /**
      * `停止`
      */
    ["com.affine.recording.stop"](): string;
    /**
      * `迁移数据以提升用户体验`
      */
    ["com.affine.migration-all-docs-notification.header"](): string;
    /**
      * `我们正在更新本地数据以便记录和筛选 “创建者” 和 “最后编辑者” 信息。请点击“迁移数据”按钮，并确保在此过程中的网络连接稳定。`
      */
    ["com.affine.migration-all-docs-notification.desc"](): string;
    /**
      * `迁移失败：{{errorMessage}}`
      */
    ["com.affine.migration-all-docs-notification.error"](options: {
        readonly errorMessage: string;
    }): string;
    /**
      * `迁移数据`
      */
    ["com.affine.migration-all-docs-notification.button"](): string;
    /**
      * `评论`
      */
    ["com.affine.comment.comments"](): string;
    /**
      * `尚无评论，请选择要添加评论的内容`
      */
    ["com.affine.comment.no-comments"](): string;
    /**
      * `删除该主题？`
      */
    ["com.affine.comment.delete.confirm.title"](): string;
    /**
      * `所有评论也将被删除，此操作无法撤销。`
      */
    ["com.affine.comment.delete.confirm.description"](): string;
    /**
      * `是否删除此回复？`
      */
    ["com.affine.comment.reply.delete.confirm.title"](): string;
    /**
      * `是否删除此回复？此操作无法撤消。`
      */
    ["com.affine.comment.reply.delete.confirm.description"](): string;
    /**
      * `显示 {{count}} 条更多回复`
      */
    ["com.affine.comment.reply.show-more"](options: {
        readonly count: string;
    }): string;
    /**
      * `显示已解决的评论`
      */
    ["com.affine.comment.filter.show-resolved"](): string;
    /**
      * `仅限我的回复和提及`
      */
    ["com.affine.comment.filter.only-my-replies"](): string;
    /**
      * `仅限当前模式`
      */
    ["com.affine.comment.filter.only-current-mode"](): string;
    /**
      * `解锁更多功能`
      */
    ["com.affine.payment.subscription.title"](): string;
    /**
      * `一款让您可以用来工作、娱乐、展示或创作任意内容的通用编辑器。`
      */
    ["com.affine.payment.subscription.description"](): string;
    /**
      * `升级`
      */
    ["com.affine.payment.subscription.button"](): string;
    /**
      * `回复`
      */
    ["com.affine.comment.reply"](): string;
    /**
      * `复制链接`
      */
    ["com.affine.comment.copy-link"](): string;
    /**
      * `复制`
      */
    ["com.affine.context-menu.copy"](): string;
    /**
      * `粘贴`
      */
    ["com.affine.context-menu.paste"](): string;
    /**
      * `剪切`
      */
    ["com.affine.context-menu.cut"](): string;
    /**
      * `添加图标`
      */
    ["com.affine.docIconPicker.placeholder"](): string;
    /**
      * `设备管理`
      */
    ["com.affine.settings.devices.title"](): string;
    /**
      * `已登录且处于活动状态的设备`
      */
    ["com.affine.settings.devices.description"](): string;
    /**
      * `当前设备`
      */
    ["com.affine.settings.devices.current"](): string;
    /**
      * `最近使用于 {{time}}`
      */
    ["com.affine.settings.devices.last-used"](options: {
        readonly time: string;
    }): string;
    /**
      * `加载中…`
      */
    ["com.affine.settings.devices.loading"](): string;
    /**
      * `退出登录`
      */
    ["com.affine.settings.devices.sign-out"](): string;
    /**
      * `退出所有设备`
      */
    ["com.affine.settings.devices.sign-out-all"](): string;
    /**
      * `确定退出 {{device}}？`
      */
    ["com.affine.settings.devices.confirm"](options: {
        readonly device: string;
    }): string;
    /**
      * `确定退出所有设备？`
      */
    ["com.affine.settings.devices.confirm-all"](): string;
    /**
      * `设备列表加载失败`
      */
    ["com.affine.settings.devices.load-failed"](): string;
    /**
      * `设备退出失败`
      */
    ["com.affine.settings.devices.sign-out-failed"](): string;
    /**
      * `批量退出设备失败`
      */
    ["com.affine.settings.devices.sign-out-all-failed"](): string;
    /**
      * `实时同步连接失败`
      */
    ["com.affine.realtime.connection-error.title"](): string;
    /**
      * `实时连接无法验证你的会话，若问题持续请重新登录。`
      */
    ["com.affine.realtime.connection-error.authentication"](): string;
    /**
      * `无法连接服务器，请检查网络与代理设置。`
      */
    ["com.affine.realtime.connection-error.network"](): string;
    /**
      * `服务器拒绝了此次实时连接请求，请稍后再试。`
      */
    ["com.affine.realtime.connection-error.server"](): string;
    /**
      * `服务器响应超时，识光会自动尝试重连。`
      */
    ["com.affine.realtime.connection-error.timeout"](): string;
    /**
      * `An internal error occurred.`
      */
    ["error.INTERNAL_SERVER_ERROR"](): string;
    /**
      * `Network error.`
      */
    ["error.NETWORK_ERROR"](): string;
    /**
      * `Too many requests.`
      */
    ["error.TOO_MANY_REQUEST"](): string;
    /**
      * `Resource not found.`
      */
    ["error.NOT_FOUND"](): string;
    /**
      * `Bad request.`
      */
    ["error.BAD_REQUEST"](): string;
    /**
      * `GraphQL bad request, code: {{code}}, {{message}}`
      */
    ["error.GRAPHQL_BAD_REQUEST"](options: Readonly<{
        code: string;
        message: string;
    }>): string;
    /**
      * `HTTP request error, message: {{message}}`
      */
    ["error.HTTP_REQUEST_ERROR"](options: {
        readonly message: string;
    }): string;
    /**
      * `URL blocked by SSRF protection: {{reason}}`
      */
    ["error.SSRF_BLOCKED_ERROR"](options: {
        readonly reason: string;
    }): string;
    /**
      * `Response too large ({{receivedBytes}} bytes), limit is {{limitBytes}} bytes`
      */
    ["error.RESPONSE_TOO_LARGE_ERROR"](options: Readonly<{
        receivedBytes: string;
        limitBytes: string;
    }>): string;
    /**
      * `Email service is not configured.`
      */
    ["error.EMAIL_SERVICE_NOT_CONFIGURED"](): string;
    /**
      * `Image format not supported: {{format}}`
      */
    ["error.IMAGE_FORMAT_NOT_SUPPORTED"](options: {
        readonly format: string;
    }): string;
    /**
      * `Query is too long, max length is {{max}}.`
      */
    ["error.QUERY_TOO_LONG"](options: {
        readonly max: string;
    }): string;
    /**
      * `Validation error, errors: {{errors}}`
      */
    ["error.VALIDATION_ERROR"](options: {
        readonly errors: string;
    }): string;
    /**
      * `User not found.`
      */
    ["error.USER_NOT_FOUND"](): string;
    /**
      * `User avatar not found.`
      */
    ["error.USER_AVATAR_NOT_FOUND"](): string;
    /**
      * `This email has already been registered.`
      */
    ["error.EMAIL_ALREADY_USED"](): string;
    /**
      * `You are trying to update your account email to the same as the old one.`
      */
    ["error.SAME_EMAIL_PROVIDED"](): string;
    /**
      * `Wrong user email or password: {{email}}`
      */
    ["error.WRONG_SIGN_IN_CREDENTIALS"](options: {
        readonly email: string;
    }): string;
    /**
      * `Unknown authentication provider {{name}}.`
      */
    ["error.UNKNOWN_OAUTH_PROVIDER"](options: {
        readonly name: string;
    }): string;
    /**
      * `OAuth state expired, please try again.`
      */
    ["error.OAUTH_STATE_EXPIRED"](): string;
    /**
      * `Invalid callback state parameter.`
      */
    ["error.INVALID_OAUTH_CALLBACK_STATE"](): string;
    /**
      * `Invalid callback code parameter, provider response status: {{status}} and body: {{body}}.`
      */
    ["error.INVALID_OAUTH_CALLBACK_CODE"](options: Readonly<{
        status: string;
        body: string;
    }>): string;
    /**
      * `Invalid auth state. You might start the auth progress from another device.`
      */
    ["error.INVALID_AUTH_STATE"](): string;
    /**
      * `Missing query parameter `{{name}}`.`
      */
    ["error.MISSING_OAUTH_QUERY_PARAMETER"](options: {
        readonly name: string;
    }): string;
    /**
      * `The third-party account has already been connected to another user.`
      */
    ["error.OAUTH_ACCOUNT_ALREADY_CONNECTED"](): string;
    /**
      * `Invalid OAuth response: {{reason}}.`
      */
    ["error.INVALID_OAUTH_RESPONSE"](options: {
        readonly reason: string;
    }): string;
    /**
      * `An invalid email provided: {{email}}`
      */
    ["error.INVALID_EMAIL"](options: {
        readonly email: string;
    }): string;
    /**
      * `Password must be between {{min}} and {{max}} characters`
      */
    ["error.INVALID_PASSWORD_LENGTH"](options: Readonly<{
        min: string;
        max: string;
    }>): string;
    /**
      * `Password is required.`
      */
    ["error.PASSWORD_REQUIRED"](): string;
    /**
      * `You are trying to sign in by a different method than you signed up with.`
      */
    ["error.WRONG_SIGN_IN_METHOD"](): string;
    /**
      * `You are not allowed to sign up.`
      */
    ["error.SIGN_UP_FORBIDDEN"](): string;
    /**
      * `The email token provided is not found.`
      */
    ["error.EMAIL_TOKEN_NOT_FOUND"](): string;
    /**
      * `An invalid email token provided.`
      */
    ["error.INVALID_EMAIL_TOKEN"](): string;
    /**
      * `The link has expired.`
      */
    ["error.LINK_EXPIRED"](): string;
    /**
      * `You must sign in first to access this resource.`
      */
    ["error.AUTHENTICATION_REQUIRED"](): string;
    /**
      * `The access token has expired.`
      */
    ["error.ACCESS_TOKEN_EXPIRED"](): string;
    /**
      * `The access token is invalid.`
      */
    ["error.ACCESS_TOKEN_INVALID"](): string;
    /**
      * `The auth session has expired.`
      */
    ["error.AUTH_SESSION_EXPIRED"](): string;
    /**
      * `The auth session has been revoked.`
      */
    ["error.AUTH_SESSION_REVOKED"](): string;
    /**
      * `The refresh token is invalid.`
      */
    ["error.REFRESH_TOKEN_INVALID"](): string;
    /**
      * `The refresh token has already been used.`
      */
    ["error.REFRESH_TOKEN_REUSED"](): string;
    /**
      * `Auth session service is temporarily unavailable.`
      */
    ["error.AUTH_SESSION_TEMPORARILY_UNAVAILABLE"](): string;
    /**
      * `You are not allowed to perform this action.`
      */
    ["error.ACTION_FORBIDDEN"](): string;
    /**
      * `You do not have permission to access this resource.`
      */
    ["error.ACCESS_DENIED"](): string;
    /**
      * `You must verify your email before accessing this resource.`
      */
    ["error.EMAIL_VERIFICATION_REQUIRED"](): string;
    /**
      * `Space {{spaceId}} permission not found.`
      */
    ["error.WORKSPACE_PERMISSION_NOT_FOUND"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Space {{spaceId}} not found.`
      */
    ["error.SPACE_NOT_FOUND"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Member not found in Space {{spaceId}}.`
      */
    ["error.MEMBER_NOT_FOUND_IN_SPACE"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `You should join in Space {{spaceId}} before broadcasting messages.`
      */
    ["error.NOT_IN_SPACE"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `You have already joined in Space {{spaceId}}.`
      */
    ["error.ALREADY_IN_SPACE"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `You do not have permission to access Space {{spaceId}}.`
      */
    ["error.SPACE_ACCESS_DENIED"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Permissions for Space {{spaceId}} changed during synchronization.`
      */
    ["error.SYNC_PERMISSION_GENERATION_CHANGED"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Owner of Space {{spaceId}} not found.`
      */
    ["error.SPACE_OWNER_NOT_FOUND"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Space should have only one owner.`
      */
    ["error.SPACE_SHOULD_HAVE_ONLY_ONE_OWNER"](): string;
    /**
      * `Owner can not leave the workspace.`
      */
    ["error.OWNER_CAN_NOT_LEAVE_WORKSPACE"](): string;
    /**
      * `You can not revoke your own permission.`
      */
    ["error.CAN_NOT_REVOKE_YOURSELF"](): string;
    /**
      * `Doc {{docId}} under Space {{spaceId}} not found.`
      */
    ["error.DOC_NOT_FOUND"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `You do not have permission to perform {{action}} action on doc {{docId}}.`
      */
    ["error.DOC_ACTION_DENIED"](options: Readonly<{
        action: string;
        docId: string;
    }>): string;
    /**
      * `Doc {{docId}} under Space {{spaceId}} is blocked from updating.`
      */
    ["error.DOC_UPDATE_BLOCKED"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `Your client with version {{version}} is rejected by remote sync server. Please upgrade to {{serverVersion}}.`
      */
    ["error.VERSION_REJECTED"](options: Readonly<{
        version: string;
        serverVersion: string;
    }>): string;
    /**
      * `Invalid doc history timestamp provided.`
      */
    ["error.INVALID_HISTORY_TIMESTAMP"](): string;
    /**
      * `History of {{docId}} at {{timestamp}} under Space {{spaceId}}.`
      */
    ["error.DOC_HISTORY_NOT_FOUND"](options: Readonly<{
        docId: string;
        timestamp: string;
        spaceId: string;
    }>): string;
    /**
      * `Blob {{blobId}} not found in Space {{spaceId}}.`
      */
    ["error.BLOB_NOT_FOUND"](options: Readonly<{
        blobId: string;
        spaceId: string;
    }>): string;
    /**
      * `Blob is invalid.`
      */
    ["error.BLOB_INVALID"](): string;
    /**
      * `Expected to publish a doc, not a Space.`
      */
    ["error.EXPECT_TO_PUBLISH_DOC"](): string;
    /**
      * `Expected to revoke a public doc, not a Space.`
      */
    ["error.EXPECT_TO_REVOKE_PUBLIC_DOC"](): string;
    /**
      * `Expect grant roles on doc {{docId}} under Space {{spaceId}}, not a Space.`
      */
    ["error.EXPECT_TO_GRANT_DOC_USER_ROLES"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `Expect revoke roles on doc {{docId}} under Space {{spaceId}}, not a Space.`
      */
    ["error.EXPECT_TO_REVOKE_DOC_USER_ROLES"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `Expect update roles on doc {{docId}} under Space {{spaceId}}, not a Space.`
      */
    ["error.EXPECT_TO_UPDATE_DOC_USER_ROLE"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `Doc is not public.`
      */
    ["error.DOC_IS_NOT_PUBLIC"](): string;
    /**
      * `Failed to store doc updates.`
      */
    ["error.FAILED_TO_SAVE_UPDATES"](): string;
    /**
      * `Failed to store doc snapshot.`
      */
    ["error.FAILED_TO_UPSERT_SNAPSHOT"](): string;
    /**
      * `A Team workspace is required to perform this action.`
      */
    ["error.ACTION_FORBIDDEN_ON_NON_TEAM_WORKSPACE"](): string;
    /**
      * `Doc default role can not be owner.`
      */
    ["error.DOC_DEFAULT_ROLE_CAN_NOT_BE_OWNER"](): string;
    /**
      * `Can not batch grant doc owner permissions.`
      */
    ["error.CAN_NOT_BATCH_GRANT_DOC_OWNER_PERMISSIONS"](): string;
    /**
      * `Can not set a non-active member as owner.`
      */
    ["error.NEW_OWNER_IS_NOT_ACTIVE_MEMBER"](): string;
    /**
      * `Invalid invitation provided.`
      */
    ["error.INVALID_INVITATION"](): string;
    /**
      * `This invitation belongs to another account.`
      */
    ["error.INVITATION_ACCOUNT_MISMATCH"](): string;
    /**
      * `No more seat available in the Space {{spaceId}}.`
      */
    ["error.NO_MORE_SEAT"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Unsupported subscription plan: {{plan}}.`
      */
    ["error.UNSUPPORTED_SUBSCRIPTION_PLAN"](options: {
        readonly plan: string;
    }): string;
    /**
      * `Failed to create checkout session.`
      */
    ["error.FAILED_TO_CHECKOUT"](): string;
    /**
      * `Invalid checkout parameters provided.`
      */
    ["error.INVALID_CHECKOUT_PARAMETERS"](): string;
    /**
      * `You have already subscribed to the {{plan}} plan.`
      */
    ["error.SUBSCRIPTION_ALREADY_EXISTS"](options: {
        readonly plan: string;
    }): string;
    /**
      * `Invalid subscription parameters provided.`
      */
    ["error.INVALID_SUBSCRIPTION_PARAMETERS"](): string;
    /**
      * `You didn't subscribe to the {{plan}} plan.`
      */
    ["error.SUBSCRIPTION_NOT_EXISTS"](options: {
        readonly plan: string;
    }): string;
    /**
      * `Your subscription has already been canceled.`
      */
    ["error.SUBSCRIPTION_HAS_BEEN_CANCELED"](): string;
    /**
      * `Your subscription has not been canceled.`
      */
    ["error.SUBSCRIPTION_HAS_NOT_BEEN_CANCELED"](): string;
    /**
      * `Your subscription has expired.`
      */
    ["error.SUBSCRIPTION_EXPIRED"](): string;
    /**
      * `Your subscription has already been in {{recurring}} recurring state.`
      */
    ["error.SAME_SUBSCRIPTION_RECURRING"](options: {
        readonly recurring: string;
    }): string;
    /**
      * `Failed to create customer portal session.`
      */
    ["error.CUSTOMER_PORTAL_CREATE_FAILED"](): string;
    /**
      * `You are trying to access a unknown subscription plan.`
      */
    ["error.SUBSCRIPTION_PLAN_NOT_FOUND"](): string;
    /**
      * `You cannot update an onetime payment subscription.`
      */
    ["error.CANT_UPDATE_ONETIME_PAYMENT_SUBSCRIPTION"](): string;
    /**
      * `A workspace is required to checkout for team subscription.`
      */
    ["error.WORKSPACE_ID_REQUIRED_FOR_TEAM_SUBSCRIPTION"](): string;
    /**
      * `Workspace id is required to update team subscription.`
      */
    ["error.WORKSPACE_ID_REQUIRED_TO_UPDATE_TEAM_SUBSCRIPTION"](): string;
    /**
      * `This subscription is managed by App Store or Google Play. Please manage it in the corresponding store.`
      */
    ["error.MANAGED_BY_APP_STORE_OR_PLAY"](): string;
    /**
      * `Calendar provider request error, status: {{status}}, message: {{message}}`
      */
    ["error.CALENDAR_PROVIDER_REQUEST_ERROR"](options: Readonly<{
        status: string;
        message: string;
    }>): string;
    /**
      * `Copilot session not found.`
      */
    ["error.COPILOT_SESSION_NOT_FOUND"](): string;
    /**
      * `Copilot session input is invalid.`
      */
    ["error.COPILOT_SESSION_INVALID_INPUT"](): string;
    /**
      * `Copilot session has been deleted.`
      */
    ["error.COPILOT_SESSION_DELETED"](): string;
    /**
      * `No copilot provider available: {{modelId}}`
      */
    ["error.NO_COPILOT_PROVIDER_AVAILABLE"](options: {
        readonly modelId: string;
    }): string;
    /**
      * `Failed to generate text.`
      */
    ["error.COPILOT_FAILED_TO_GENERATE_TEXT"](): string;
    /**
      * `Failed to generate embedding with {{provider}}: {{message}}`
      */
    ["error.COPILOT_FAILED_TO_GENERATE_EMBEDDING"](options: Readonly<{
        provider: string;
        message: string;
    }>): string;
    /**
      * `Failed to create chat message.`
      */
    ["error.COPILOT_FAILED_TO_CREATE_MESSAGE"](): string;
    /**
      * `Unsplash is not configured.`
      */
    ["error.UNSPLASH_IS_NOT_CONFIGURED"](): string;
    /**
      * `Action has been taken, no more messages allowed.`
      */
    ["error.COPILOT_ACTION_TAKEN"](): string;
    /**
      * `Doc {{docId}} not found.`
      */
    ["error.COPILOT_DOC_NOT_FOUND"](options: {
        readonly docId: string;
    }): string;
    /**
      * `Some docs not found.`
      */
    ["error.COPILOT_DOCS_NOT_FOUND"](): string;
    /**
      * `Copilot message {{messageId}} not found.`
      */
    ["error.COPILOT_MESSAGE_NOT_FOUND"](options: {
        readonly messageId: string;
    }): string;
    /**
      * `Copilot prompt {{name}} not found.`
      */
    ["error.COPILOT_PROMPT_NOT_FOUND"](options: {
        readonly name: string;
    }): string;
    /**
      * `Copilot prompt is invalid.`
      */
    ["error.COPILOT_PROMPT_INVALID"](): string;
    /**
      * `Copilot provider {{provider}} does not support output type {{kind}}`
      */
    ["error.COPILOT_PROVIDER_NOT_SUPPORTED"](options: Readonly<{
        provider: string;
        kind: string;
    }>): string;
    /**
      * `Provider {{provider}} failed with {{kind}} error: {{message}}`
      */
    ["error.COPILOT_PROVIDER_SIDE_ERROR"](options: Readonly<{
        provider: string;
        kind: string;
        message: string;
    }>): string;
    /**
      * `Embedding feature is disabled, please contact the administrator to enable it in the workspace settings.`
      */
    ["error.COPILOT_EMBEDDING_DISABLED"](): string;
    /**
      * `Embedding feature not available, you may need to install pgvector extension to your database`
      */
    ["error.COPILOT_EMBEDDING_UNAVAILABLE"](): string;
    /**
      * `Selected sources are still processing. Try again shortly.`
      */
    ["error.COPILOT_SELECTED_SOURCES_PROCESSING"](): string;
    /**
      * `Selected sources could not be processed. Remove the failed source or try again.`
      */
    ["error.COPILOT_SELECTED_SOURCES_FAILED"](): string;
    /**
      * `Selected sources are not available for AI retrieval.`
      */
    ["error.COPILOT_SELECTED_SOURCES_UNAVAILABLE"](): string;
    /**
      * `Too many or too much content was selected. Select fewer sources and try again.`
      */
    ["error.COPILOT_SELECTED_SOURCES_LIMIT_EXCEEDED"](): string;
    /**
      * `Failed to add workspace artifact: {{message}}`
      */
    ["error.COPILOT_FAILED_TO_ADD_WORKSPACE_ARTIFACT"](options: {
        readonly message: string;
    }): string;
    /**
      * `Transcription job already exists`
      */
    ["error.COPILOT_TRANSCRIPTION_JOB_EXISTS"](): string;
    /**
      * `Transcription job not found.`
      */
    ["error.COPILOT_TRANSCRIPTION_JOB_NOT_FOUND"](): string;
    /**
      * `Audio not provided.`
      */
    ["error.COPILOT_TRANSCRIPTION_AUDIO_NOT_PROVIDED"](): string;
    /**
      * `You have exceeded your blob size quota.`
      */
    ["error.BLOB_QUOTA_EXCEEDED"](): string;
    /**
      * `You have exceeded your storage quota.`
      */
    ["error.STORAGE_QUOTA_EXCEEDED"](): string;
    /**
      * `You have exceeded your workspace member quota.`
      */
    ["error.MEMBER_QUOTA_EXCEEDED"](): string;
    /**
      * `You have reached the limit of actions in this workspace, please upgrade your plan.`
      */
    ["error.COPILOT_QUOTA_EXCEEDED"](): string;
    /**
      * `Runtime config {{key}} not found.`
      */
    ["error.RUNTIME_CONFIG_NOT_FOUND"](options: {
        readonly key: string;
    }): string;
    /**
      * `Invalid runtime config type  for '{{key}}', want '{{want}}', but get {{get}}.`
      */
    ["error.INVALID_RUNTIME_CONFIG_TYPE"](options: Readonly<{
        key: string;
        want: string;
        get: string;
    }>): string;
    /**
      * `Mailer service is not configured.`
      */
    ["error.MAILER_SERVICE_IS_NOT_CONFIGURED"](): string;
    /**
      * `Cannot delete all admin accounts.`
      */
    ["error.CANNOT_DELETE_ALL_ADMIN_ACCOUNT"](): string;
    /**
      * `Cannot delete own account.`
      */
    ["error.CANNOT_DELETE_OWN_ACCOUNT"](): string;
    /**
      * `Cannot delete account. You are the owner of one or more team workspaces. Please transfer ownership or delete them first.`
      */
    ["error.CANNOT_DELETE_ACCOUNT_WITH_OWNED_TEAM_WORKSPACE"](): string;
    /**
      * `Captcha verification failed.`
      */
    ["error.CAPTCHA_VERIFICATION_FAILED"](): string;
    /**
      * `Invalid session id to generate license key.`
      */
    ["error.INVALID_LICENSE_SESSION_ID"](): string;
    /**
      * `License key has been revealed. Please check your mail box of the one provided during checkout.`
      */
    ["error.LICENSE_REVEALED"](): string;
    /**
      * `Workspace already has a license applied.`
      */
    ["error.WORKSPACE_LICENSE_ALREADY_EXISTS"](): string;
    /**
      * `License not found.`
      */
    ["error.LICENSE_NOT_FOUND"](): string;
    /**
      * `Invalid license to activate. {{reason}}`
      */
    ["error.INVALID_LICENSE_TO_ACTIVATE"](options: {
        readonly reason: string;
    }): string;
    /**
      * `Invalid license update params. {{reason}}`
      */
    ["error.INVALID_LICENSE_UPDATE_PARAMS"](options: {
        readonly reason: string;
    }): string;
    /**
      * `License has expired.`
      */
    ["error.LICENSE_EXPIRED"](): string;
    /**
      * `Unsupported client with version [{{clientVersion}}], required version is [{{requiredVersion}}].`
      */
    ["error.UNSUPPORTED_CLIENT_VERSION"](options: Readonly<{
        clientVersion: string;
        requiredVersion: string;
    }>): string;
    /**
      * `This 识光 server is too old for this client. Please upgrade the server to {{requiredVersion}}.`
      */
    ["error.UNSUPPORTED_SERVER_VERSION"](options: {
        readonly requiredVersion: string;
    }): string;
    /**
      * `Notification not found.`
      */
    ["error.NOTIFICATION_NOT_FOUND"](): string;
    /**
      * `Mentioned user can not access doc {{docId}}.`
      */
    ["error.MENTION_USER_DOC_ACCESS_DENIED"](options: {
        readonly docId: string;
    }): string;
    /**
      * `You can not mention yourself.`
      */
    ["error.MENTION_USER_ONESELF_DENIED"](): string;
    /**
      * `Invalid app config for module `{{module}}` with key `{{key}}`. {{hint}}.`
      */
    ["error.INVALID_APP_CONFIG"](options: Readonly<{
        module: string;
        key: string;
        hint: string;
    }>): string;
    /**
      * `Invalid app config input: {{message}}`
      */
    ["error.INVALID_APP_CONFIG_INPUT"](options: {
        readonly message: string;
    }): string;
    /**
      * `Search index for Space {{spaceId}} is not ready yet.`
      */
    ["error.SEARCH_INDEX_NOT_READY"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Search permissions are still syncing. Please try again shortly.`
      */
    ["error.SEARCH_PERMISSION_SYNCING"](): string;
    /**
      * `Search provider is temporarily unavailable.`
      */
    ["error.SEARCH_PROVIDER_UNAVAILABLE"](): string;
    /**
      * `Search index is temporarily unavailable.`
      */
    ["error.SEARCH_INDEX_FAILED"](): string;
    /**
      * `Search provider not found.`
      */
    ["error.SEARCH_PROVIDER_NOT_FOUND"](): string;
    /**
      * `Invalid request argument to search provider: {{reason}}`
      */
    ["error.INVALID_SEARCH_PROVIDER_REQUEST"](options: {
        readonly reason: string;
    }): string;
    /**
      * `Invalid indexer input: {{reason}}`
      */
    ["error.INVALID_INDEXER_INPUT"](options: {
        readonly reason: string;
    }): string;
    /**
      * `Comment not found.`
      */
    ["error.COMMENT_NOT_FOUND"](): string;
    /**
      * `Reply not found.`
      */
    ["error.REPLY_NOT_FOUND"](): string;
    /**
      * `Comment attachment not found.`
      */
    ["error.COMMENT_ATTACHMENT_NOT_FOUND"](): string;
    /**
      * `You have exceeded the comment attachment size quota.`
      */
    ["error.COMMENT_ATTACHMENT_QUOTA_EXCEEDED"](): string;
} { const { t } = useTranslation(); return useMemo(() => createProxy((key) => t.bind(null, key)), [t]); }
function createComponent(i18nKey: string) {
    return (props) => createElement(Trans, { i18nKey, shouldUnescape: true, ...props });
}
export const TypedTrans: {
    /**
      * `请访问<a>{{link}}</a>了解有关 识光 AI 的更多详细信息。`
      */
    ["com.affine.ai-onboarding.general.5.description"]: ComponentType<TypedTransProps<{
        readonly link: string;
    }, {
        a: JSX.Element;
    }>>;
    /**
      * `继续操作即表示您同意我们的<a>识光 AI 服务条款</a>。`
      */
    ["com.affine.ai-onboarding.general.privacy"]: ComponentType<TypedTransProps<Readonly<{}>, {
        a: JSX.Element;
    }>>;
    /**
      * `正在打开 <1>识光</1> 应用
    `
      */
    ["com.affine.auth.open.affine.prompt"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `已在 <1>识光</1> 客户端中打开此文档`
      */
    ["com.affine.auth.open.affine.open-doc-prompt"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `要继续登录，请输入发送到 <a>{{email}}</a> 的验证码。`
      */
    ["com.affine.auth.sign.auth.code.hint"]: ComponentType<TypedTransProps<{
        readonly email: string;
    }, {
        a: JSX.Element;
    }>>;
    /**
      * `或者使用<1>密码登录</1>。`
      */
    ["com.affine.auth.sign.auth.code.message.password"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `这是你或团队自己部署的 识光。登录后，工作区数据会保存到你填写的 识光 服务器，而不是 识光 官方云。<1>了解有关自托管的更多信息。</1>`
      */
    ["com.affine.auth.sign.add-selfhosted.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `点击上面的“谷歌登录以继续”，即表示您确认同意 识光 的<1>条件条款</1>和<3>隐私政策</3>。`
      */
    ["com.affine.auth.sign.message"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `此演示有限。<1>下载 识光 客户端</1>以获取最新功能和表现。`
      */
    ["com.affine.banner.content"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 个精选`
    
      * - com.affine.collection.toolbar.selected_one: `已选择 <0>{{count}}</0> 个精选`
    
      * - com.affine.collection.toolbar.selected_other: `已选择 <0>{{count}}</0> 个精选`
      */
    ["com.affine.collection.toolbar.selected"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 个精选`
      */
    ["com.affine.collection.toolbar.selected_one"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 个精选`
      */
    ["com.affine.collection.toolbar.selected_other"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 个精选`
      */
    ["com.affine.collection.toolbar.selected_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `正在删除 <1>{{tag}}</1> ，此操作无法撤销，所有内容将会丢失。`
      */
    ["com.affine.delete-tags.confirm.description"]: ComponentType<TypedTransProps<{
        readonly tag: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `已选择 <1>{{selectedCount}}</1>，已过滤 <3>{{filteredCount}}</3>`
      */
    ["com.affine.editCollection.rules.countTips"]: ComponentType<TypedTransProps<Readonly<{
        selectedCount: string;
        filteredCount: string;
    }>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `显示 <1>{{count}}</1> 篇文档。`
      */
    ["com.affine.editCollection.rules.countTips.more"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `请<1>添加规则</1>保存此精选或切换到<3>文档</3>，使用手动选择模式`
      */
    ["com.affine.editCollection.rules.empty.noRules.tips"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `符合规则的文档将 <2>{{highlight}}</2> 被添加到当前精选`
      */
    ["com.affine.editCollection.rules.tips"]: ComponentType<TypedTransProps<{
        readonly highlight: string;
    }, {
        ["2"]: JSX.Element;
    }>>;
    /**
      * `如果您仍然遇到此问题，请通过<1>社区</1>与我们联系。`
      */
    ["com.affine.error.contact-us"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `通过工作区创建者的免费帐户，每个成员都可以访问最多 <1>7 天<1> 的版本历史记录。`
      */
    ["com.affine.history.confirm-restore-modal.free-plan-prompt.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `通过工作区创建者的 Pro 帐户，每个成员都享有访问最多<1>30 天<1>版本历史记录的特权。`
      */
    ["com.affine.history.confirm-restore-modal.pro-plan-prompt.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 篇文档`
    
      * - com.affine.page.toolbar.selected_one: `已选中 <0>{{count}}</0> 篇文档`
    
      * - com.affine.page.toolbar.selected_other: `已选中 <0>{{count}}</0> 篇文档`
      */
    ["com.affine.page.toolbar.selected"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选中 <0>{{count}}</0> 篇文档`
      */
    ["com.affine.page.toolbar.selected_one"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选中 <0>{{count}}</0> 篇文档`
      */
    ["com.affine.page.toolbar.selected_other"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选中 <0>{{count}}</0> 篇文档`
      */
    ["com.affine.page.toolbar.selected_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `您当前处于<a> Free 计划</a>.`
      */
    ["com.affine.payment.billing-setting.ai.free-desc"]: ComponentType<TypedTransProps<Readonly<{}>, {
        a: JSX.Element;
    }>>;
    /**
      * `您已购买<a>Believer 计划</a>。尽情享受您的福利吧！`
      */
    ["com.affine.payment.billing-setting.believer.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        a: JSX.Element;
    }>>;
    /**
      * `您目前处于<1> {{planName}} 计划</1>。`
      */
    ["com.affine.payment.billing-setting.current-plan.description"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `您目前处于 believer <1>{{planName}} 计划</1>。`
      */
    ["com.affine.payment.billing-setting.current-plan.description.lifetime"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `您目前处于每月<1> {{planName}} 计划</1>。`
      */
    ["com.affine.payment.billing-setting.current-plan.description.monthly"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `您目前处于每年<1> {{planName}} 计划</1>。`
      */
    ["com.affine.payment.billing-setting.current-plan.description.yearly"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `一次性购买。个人使用权最长可达 150 年。适用<a>公平使用政策</a>。`
      */
    ["com.affine.payment.lifetime.caption-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        a: JSX.Element;
    }>>;
    /**
      * `您目前处于 {{currentPlan}} 计划。如果您有任何问题，请联系我们的<3>客户支持</3>。`
      */
    ["com.affine.payment.subtitle-active"]: ComponentType<TypedTransProps<{
        readonly currentPlan: string;
    }, {
        ["3"]: JSX.Element;
    }>>;
    /**
      * `如果您有任何问题，请联系我们的<1>客户支持</1>。`
      */
    ["com.affine.payment.upgrade-success-page.support"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `如果您有任何问题，请联系我们的<1>客户支持</1>。`
      */
    ["com.affine.payment.upgrade-success-page.team.text-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `如果您有任何问题，请联系我们的<1>客户支持</1>。`
      */
    ["com.affine.payment.license-success.text-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `此操作将删除旧的收藏夹部分。<b>您的文档是安全的</b>，请确保您已将经常访问的文档移动到新的个人收藏夹。`
      */
    ["com.affine.rootAppSidebar.migration-data.clean-all.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        b: JSX.Element;
    }>>;
    /**
      * `<b>您的文档是安全的</b>，但您需要重新收藏最常用的文档。“收藏夹”现在属于个人。现在将文档从旧收藏夹移动到新的个人收藏夹，或通过单击“清空旧收藏夹”删除旧收藏夹。`
      */
    ["com.affine.rootAppSidebar.migration-data.help.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        b: JSX.Element;
    }>>;
    /**
      * `没有文档标题包含 <1>{{search}}</1>`
      */
    ["com.affine.selectPage.empty.tips"]: ComponentType<TypedTransProps<{
        readonly search: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `您确定要从<1>{{server}}</1> 中删除您的账户吗？`
      */
    ["com.affine.setting.account.delete.confirm-delete-description-1"]: ComponentType<TypedTransProps<{
        readonly server: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `您的账号将无法访问，您在服务器上的个人空间将被永久删除。您可以通过卸载应用程序或清除浏览器存储来移除本地数据。<1>此操作不可逆。</1>`
      */
    ["com.affine.setting.account.delete.confirm-delete-description-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `请输入 <1>{{email}}</1> 以确认删除账户。`
      */
    ["com.affine.setting.account.delete.email-confirm-description"]: ComponentType<TypedTransProps<{
        readonly email: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `还未安装该应用？<1>点此下载</1>。`
      */
    ["com.affine.open-in-app.card.subtitle"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `设置已更改；请重新启动应用程序。<1>重新启动</1>`
      */
    ["com.affine.settings.editorSettings.general.spell-check.restart-hint"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `喜欢我们的应用程序吗？ <1>在 GitHub 给我们加星标</1>并<2>分享您的宝贵反馈</2>！`
      */
    ["com.affine.settings.suggestion-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `会议功能可在测试阶段<strong>免费</strong>使用`
      */
    ["com.affine.settings.meetings.setting.prompt.2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        strong: JSX.Element;
    }>>;
    /**
      * `<strong> 在会议中结合使用AI功能 - 有助于改善您的协作。</strong>
    <ul><li>及时提取行动项和关键见解</li><li>从会议开始就能智能自动捕获</li><li>可无缝集成到所有会议平台</li><li>为您的会议提供统一空间</li><li>您的人工智能助手会保存每次会议的上下文</li></ul>`
      */
    ["com.affine.settings.meetings.setting.welcome.hints"]: ComponentType<TypedTransProps<Readonly<{}>, {
        strong: JSX.Element;
        ul: JSX.Element;
        li: JSX.Element;
    }>>;
    /**
      * `利用 识光 提供的会议记录和 AI 总结功能。 <1>在社区中讨论更多</1>。`
      */
    ["com.affine.settings.meetings.enable.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `使用<1>Toeverything.Inc</1>提供的本地密钥激活`
      */
    ["com.affine.settings.workspace.license.self-host-team.team.license"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `复制您的工作区ID并<1>联系我们</1>。`
      */
    ["com.affine.settings.workspace.license.self-host-team.upload-license-file.tips.content"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `如果您遇到任何问题，请联系 support@toeverything.info。未获得许可？<1>点击购买</1>。`
      */
    ["com.affine.settings.workspace.license.activate-modal.tips"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `这将使工作区变为只读。您的密钥在其他地方仍然可用。停用不会取消您的团队计划。要取消，请转到<1>管理支付</1>。`
      */
    ["com.affine.settings.workspace.license.deactivate-modal.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `属性 “<1>{{ name }}</1>” 将被移除，该操作无法撤销。`
      */
    ["com.affine.settings.workspace.properties.delete-property-desc"]: ComponentType<TypedTransProps<{
        readonly name: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> 篇文档`
      */
    ["com.affine.settings.workspace.properties.doc"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0>  篇文档`
      */
    ["com.affine.settings.workspace.properties.doc_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `管理工作区 <1>{{name}}</1> 属性`
      */
    ["com.affine.settings.workspace.properties.header.subtitle"]: ComponentType<TypedTransProps<{
        readonly name: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 个标签`
    
      * - com.affine.tag.toolbar.selected_one: `已选择 <0>{{count}}</0> 个标签`
    
      * - com.affine.tag.toolbar.selected_other: `已选择 <0>{{count}}</0> 个标签`
      */
    ["com.affine.tag.toolbar.selected"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 个标签`
      */
    ["com.affine.tag.toolbar.selected_one"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 个标签`
      */
    ["com.affine.tag.toolbar.selected_other"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `已选择 <0>{{count}}</0> 个标签`
      */
    ["com.affine.tag.toolbar.selected_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `删除<1>{{workspace}}</1>后无法撤销，请谨慎操作。所有内容都将丢失。`
      */
    ["com.affine.workspaceDelete.description"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `删除<1>{{workspace}}</1>将删除本地数据和已同步到服务器的数据，此操作无法撤销，请谨慎操作。`
      */
    ["com.affine.workspaceDelete.description2"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `我们推荐使用<1>Chrome</1>浏览器获得最佳体验。`
      */
    recommendBrowser: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `确定将<1>{{workspaceName}}</1>升级为团队空间？这将允许无限数量的成员在此工作区中协作。`
      */
    ["com.affine.upgrade-to-team-page.upgrade-confirm.description"]: ComponentType<TypedTransProps<{
        readonly workspaceName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> 在 <2>{{docTitle}}</2> 中提到您`
      */
    ["com.affine.notification.mention"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        docTitle: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> 在 <2>{{docTitle}}</2> 中添加了评论`
      */
    ["com.affine.notification.comment"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        docTitle: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1>在 <2> {{docTitle}} </2>的评论中提到了你`
      */
    ["com.affine.notification.comment-mention"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        docTitle: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> 接受了您的邀请`
      */
    ["com.affine.notification.invitation-accepted"]: ComponentType<TypedTransProps<{
        readonly username: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> 请求加入 <2>{{workspaceName}}</2>`
      */
    ["com.affine.notification.invitation-review-request"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        workspaceName: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> 已拒绝您加入 <2>{{workspaceName}}</2> 的请求`
      */
    ["com.affine.notification.invitation-review-declined"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        workspaceName: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> 已批准您加入 <2>{{workspaceName}}</2> 的请求`
      */
    ["com.affine.notification.invitation-review-approved"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        workspaceName: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `关于您邀请加入 <1>{{workspaceName}}</1> 存在某些问题 `
      */
    ["com.affine.notification.invitation-blocked"]: ComponentType<TypedTransProps<{
        readonly workspaceName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> 邀请您加入 <2>{{workspaceName}}</2>`
      */
    ["com.affine.notification.invitation"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        workspaceName: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `由于可用席位不足，无法加入<1/> <2>{{workspaceName}}</2>。`
      */
    ["com.affine.fail-to-join-workspace.description-1"]: ComponentType<TypedTransProps<{
        readonly workspaceName: string;
    }, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `您（<3>{{userEmail}}</3> ）已请求加入 <1/> <2>{{workspaceName}}</2> ，工作区所有者和团队管理员将审核您的请求。`
      */
    ["com.affine.sent-request-to-join-workspace.description"]: ComponentType<TypedTransProps<Readonly<{
        userEmail: string;
        workspaceName: string;
    }>, {
        ["3"]: JSX.Element;
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `无法处理您（<3>{{userEmail}}</3>）加入<1/> <2>{{workspaceName}}</2>的请求，该工作区已达到成员上限。请联系工作区所有者以获取更多席位。`
      */
    ["com.affine.failed-to-send-request.description"]: ComponentType<TypedTransProps<Readonly<{
        userEmail: string;
        workspaceName: string;
    }>, {
        ["3"]: JSX.Element;
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `将您的 Readwise 高亮内容导入 识光。请访问 Readwise，<br />点击 <a>"获取访问令牌"</a>，然后在下面粘贴该令牌。`
      */
    ["com.affine.integration.readwise.connect.desc"]: ComponentType<TypedTransProps<Readonly<{}>, {
        br: JSX.Element;
        a: JSX.Element;
    }>>;
    /**
      * `自上次成功导入至 {{lastImportedAt}} 以来的更新 <a>改为导入所有内容</a>`
      */
    ["com.affine.integration.readwise.import.desc-from-last"]: ComponentType<TypedTransProps<{
        readonly lastImportedAt: string;
    }, {
        a: JSX.Element;
    }>>;
    /**
      * `请联系 <1>{{user}}</1> 提升 AI 权限或重新发送附件。`
      */
    ["com.affine.audio.transcribe.non-owner.confirm.message"]: ComponentType<TypedTransProps<{
        readonly user: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
} = /*#__PURE__*/ createProxy(createComponent);
